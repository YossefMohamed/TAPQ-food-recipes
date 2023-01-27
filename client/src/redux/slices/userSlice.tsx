import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "{}")
    : {},
  loading: false,
  error: [],
};

export const signup = createAsyncThunk(
  "auth/signup",
  async (
    args: {
      email: string;
      password: string;
      name: string;
      passwordConfirm: string;
    },
    thunkAPI
  ) => {
    const { rejectWithValue }: any = thunkAPI;
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/signup",
        {
          email: args.email,
          name: args.name,
          password: args.password,
          passwordConfirmation: args.passwordConfirm,
        }
      );
      localStorage.setItem("user", JSON.stringify(data.data.user));

      localStorage.setItem("token", JSON.stringify(data.data.token));
      return data.data.user;
    } catch (err: any) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      console.log("logouted");

      state.user = {};
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(signup.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(signup.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice;
