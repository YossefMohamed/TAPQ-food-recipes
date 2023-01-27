import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addToaster } from "./ToasterSlice";

const initialState: any = {
  addReciepe: {
    error: [],
    recipe: "",
    loading: false,
  },
};

export const addReciepe = createAsyncThunk(
  "recipe/addReciepe",
  async (
    args: {
      title: string;
      steps: string[];
      tags: string[];
      ingredients: string[];
    },
    thunkAPI
  ) => {
    const { rejectWithValue }: any = thunkAPI;
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/recipes",
        {
          title: args.title,
          steps: args.steps,
          ingredients: args.ingredients,
          tags: args.tags,
        },
        {
          withCredentials: true,
        }
      );

      return data.data._id;
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

export const getReciepe = createAsyncThunk(
  "recipe/getReciepe",
  async (
    args: {
      id: string;
    },
    thunkAPI
  ) => {
    const { rejectWithValue }: any = thunkAPI;
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/recipes/" + args.id,
        {
          withCredentials: true,
        }
      );
      console.log(data.data);
      return data.data;
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

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    resetRecipe: (state) => {
      state.addReciepe.recipe = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addReciepe.fulfilled, (state, action) => {
      state.addReciepe.recipe = action.payload;
      state.addReciepe.loading = false;
    });
    builder.addCase(addReciepe.pending, (state, action) => {
      state.addReciepe.loading = true;
      state.addReciepe.error = "";
    });
    builder.addCase(addReciepe.rejected, (state, action: any) => {
      state.addReciepe.loading = false;
      state.addReciepe.error = action.payload;
    });
  },
});

export default recipeSlice;
