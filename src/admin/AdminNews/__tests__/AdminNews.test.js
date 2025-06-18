const mockUpload = jest.fn(() => Promise.resolve("mocked/image/path.jpg"));
const mockInsert = jest.fn();
const mockSelect = jest.fn(() => ({
  order: () => Promise.resolve({
    data: [{
      id: 1,
      title: "Test title",
      description: "Test description",
      imgpath: "",
      date: new Date().toISOString(),
    }],
    error: null,
  }),
}));
const mockUpdate = jest.fn(() => Promise.resolve({ error: null }));

jest.mock("../../../components/dataBase", () => {
  return {
    __esModule: true,
    uploadImageToSupabase: (...args) => {
      mockUpload(...args);
      return Promise.resolve("mocked/image/path.jpg");
    },
    dataBase: {
      from: () => ({
        insert: (...args) => {
          mockInsert(...args);
          return Promise.resolve({ error: null });
        },
        update: (...args) => ({
          eq: () => {
            mockUpdate(...args);
            return Promise.resolve({ error: null });
          },
        }),
        delete: (...args) => ({
          eq: () => {
            return Promise.resolve({ error: null });
          },
        }),
        select: (...args) => ({
          order: () => Promise.resolve({
            data: [{
              id: 1,
              title: "Test title",
              description: "Test description",
              imgpath: "",
              date: new Date().toISOString(),
            }],
            error: null,
          }),
        }),
      }),
    },
  };
});

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import AdminNews from "../AdminNews";

test("добавляет новость", async () => {
  const user = userEvent.setup();
  const file = new File(["test content"], "image.png", { type: "image/png" });

  render(
    <MemoryRouter>
      <AdminNews />
    </MemoryRouter>
  );

  await user.type(screen.getByPlaceholderText("Заголовок"), "Test title");
  await user.type(screen.getByPlaceholderText("Описание"), "Test description");
  await user.upload(screen.getByTestId("file-input"), file);
  await user.click(screen.getByRole("button", { name: /добавить/i }));

  await waitFor(() => {
    expect(mockUpload).toHaveBeenCalledTimes(1);
    expect(mockInsert).toHaveBeenCalledTimes(1);
  });
});

test("редактирует новость", async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <AdminNews />
    </MemoryRouter>
  );

  const editButton = await screen.findByTestId("edit-button-1");
  await user.click(editButton);

  const [titleInput] = await screen.findAllByDisplayValue("Test title");
  const [descrInput] = await screen.findAllByDisplayValue("Test description");

  await user.clear(titleInput);
  await user.type(titleInput, "New title");

  await user.clear(descrInput);
  await user.type(descrInput, "New description");

  await user.click(screen.getByRole("button", { name: /обновить/i }));

  await waitFor(() => {
    expect(mockUpdate).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "New title",
        description: "New description",
      })
    );
  });
});

test("удаляет новость", async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <AdminNews />
    </MemoryRouter>
  );

  const deleteButtons = await screen.findAllByText((_, node) =>
    node?.textContent?.trim() === "Удалить новость"
  );
  const deleteButton = deleteButtons[deleteButtons.length - 1]; // Берём кнопку внутри элемента новости
  await user.click(deleteButton);

  await waitFor(() => {
    expect(screen.queryByText("Test title")).not.toBeInTheDocument();
  });
});
