// src/components/__mocks__/dataBase.js

const mockInsert = jest.fn().mockResolvedValue({ error: null });
const mockOrder = jest.fn().mockResolvedValue({ data: [], error: null });
const mockSelect = jest.fn(() => ({ order: mockOrder }));

const mockFrom = jest.fn(() => ({
    select: mockSelect,
    insert: mockInsert,
    update: jest.fn(() => ({ error: null })),
    delete: jest.fn(() => ({ error: null })),
    eq: jest.fn(() => ({
        update: jest.fn(() => ({ error: null })),
        delete: jest.fn(() => ({ error: null }))
    }))
}));

export const dataBase = {
    from: mockFrom
};

export const __mocks__ = {
    mockInsert,
    mockOrder,
    mockSelect,
    mockFrom
};