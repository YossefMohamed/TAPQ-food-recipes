import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addToaster } from "./ToasterSlice";

const initialState: any = {
  user: {},
  loading: false,
  error: [],
};

export const signin = createAsyncThunk(
  "auth/signin",
  async (
    args: {
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    const { rejectWithValue }: any = thunkAPI;
    try {
      console.log(args);

      const { data } = await axios.post(
        "http://localhost:5000/api/users/signin",
        {
          email: args.email,
          password: args.password,
        },
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("user", JSON.stringify(data.data.user));

      localStorage.setItem("token", JSON.stringify(data.data.token));
      return data.data.user;
    } catch (err: any) {
      err.response.data.error.map((err: any) =>
        thunkAPI.dispatch(
          addToaster(
            err.field
              ? "<span className='font-bold'> " +
                  err.field +
                  " :</span> " +
                  err.message
              : err.message
          )
        )
      );

      return rejectWithValue(err.response.data.error);
    }
  }
);

export const editUser = createAsyncThunk(
  "auth/editUser",
  async (
    args: {
      name: string;
    },
    thunkAPI
  ) => {
    const { rejectWithValue }: any = thunkAPI;
    try {
      console.log(args);

      const { data } = await axios.patch(
        "http://localhost:5000/api/users/",
        args,
        {
          withCredentials: true,
        }
      );

      return data.data.user;
    } catch (err: any) {
      err.response.data.error.map((err: any) =>
        thunkAPI.dispatch(
          addToaster(
            err.field
              ? "<span className='font-bold'> " +
                  err.field +
                  " :</span> " +
                  err.message
              : err.message
          )
        )
      );

      return rejectWithValue(err.response.data.error);
    }
  }
);

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
      err.response.data.error.map((err: any) =>
        thunkAPI.dispatch(
          addToaster(
            "<span className='font-bold'> " +
              err.field +
              " :</span> " +
              err.message
          )
        )
      );

      return rejectWithValue(err.response.data.error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {
    const { rejectWithValue }: any = thunkAPI;
    try {
      const { data } = await axios.get("http://localhost:5000/api/users/", {
        withCredentials: true,
      });
      return data.data.user;
    } catch (err: any) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

export const signoutCurrentUser = createAsyncThunk(
  "auth/signoutCurrentUser",
  async (_, thunkAPI) => {
    const { rejectWithValue }: any = thunkAPI;
    try {
      await axios.post(
        "http://localhost:5000/api/users/signout",
        {},
        {
          withCredentials: true,
        }
      );
      return;
    } catch (err: any) {
      console.log(err.response.data.error);

      return rejectWithValue(err.response.data.error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
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

    builder.addCase(signin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(signin.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(signin.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(getCurrentUser.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state.user = {};
      state.error = "";
    });
    builder.addCase(signoutCurrentUser.fulfilled, (state, action) => {
      state.user = {};
    });

    builder.addCase(editUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
  },
});

export default userSlice;
