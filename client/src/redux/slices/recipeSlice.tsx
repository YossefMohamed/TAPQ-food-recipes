import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addToaster } from "./ToasterSlice";

const initialState: any = {
  addRecipe: {
    error: [],
    recipe: "",
    loading: false,
  },
};

export const addRecipe = createAsyncThunk(
  "recipe/addRecipe",
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

export const getRecipe = createAsyncThunk(
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
      state.addRecipe.recipe = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addRecipe.fulfilled, (state, action) => {
      state.addRecipe.recipe = action.payload;
      state.addRecipe.loading = false;
    });
    builder.addCase(addRecipe.pending, (state, action) => {
      state.addRecipe.loading = true;
      state.addRecipe.error = "";
    });
    builder.addCase(addRecipe.rejected, (state, action: any) => {
      state.addRecipe.loading = false;
      state.addRecipe.error = action.payload;
    });
  },
});

export const { resetRecipe } = recipeSlice.actions;

export default recipeSlice;