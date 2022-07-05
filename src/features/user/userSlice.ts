import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  id: number;
  name: string;
};

type InitialState = {
  loading: boolean;
  users: User[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  users: [],
  error: "",
};

// generated pending, fulfilled or rejected action typs
export const fetchUser = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        (state.loading = false),
          (state.users = action.payload),
          (state.error = "");
      }
    );
    builder.addCase(fetchUser.rejected, (state, action) => {
      (state.loading = false),
        (state.users = []),
        (state.error = action.error.message || "Error Something went wrong");
    });
  },
});

export default userSlice.reducer;
