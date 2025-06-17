const mockUpload = jest.fn(() => Promise.resolve("mocked/image/path.jpg"));
const mockInsert = jest.fn();

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
        update: () => Promise.resolve({ error: null }),
        delete: () => Promise.resolve({ error: null }),
        select: () => ({
          order: () => Promise.resolve({ data: [], error: null }),
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