import moment from "moment";
import React, { ReactHTMLElement, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addReview } from "../../redux/slices/recipeSlice";
import { AppDispatch } from "../../redux/store/store";
import StarRating from "../startRating/StarRating";

function Comment({ reviews, recipeId }: any) {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const onSubmitReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      content,
      rating,
      recipe: recipeId,
    });

    dispatch(
      addReview({
        content,
        rating,
        recipe: recipeId,
      })
    );
  };
  return (
    <section className="bg-white">
      <div className="">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Reviews ({reviews.length})
          </h2>
        </div>
        <form className="mb-10" onSubmit={onSubmitReview}>
          <div className="py-2 px-4  bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows={6}
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="my-4 flex gap-3 items-center">
            Rating : <StarRating getRating={(value: any) => setRating(value)} />
          </div>
          <button
            type="submit"
            className="btn-primary inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Post comment
          </button>
        </form>
        {reviews.map((review: any) => (
          <article className="py-6 mb-6 text-base border-y bg-white rounded-lg dark:bg-gray-900">
            <footer className="flex justify-between items-center mb-6 ">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src={`https://api.dicebear.com/5.x/croodles/svg?seed=${review.author.name}`}
                    alt="Michael Gough"
                  />
                  {review.author.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time dateTime="2022-02-08" title="February 8th, 2022">
                    {moment(review.createdAt).format("LL")}
                  </time>
                </p>
                <div className="rating flex gap-2 items-center mx-4">
                  <div className="text-main flex items-center">
                    <>
                      {Array.from(Array(review.rating), (_, x) => x).map(
                        (_, idx) => {
                          return <AiFillStar key={idx} />;
                        }
                      )}

                      {Array.from(
                        Array(Math.abs(review.rating - 5)),
                        (_, x) => x
                      ).map((_, idx) => {
                        return <AiOutlineStar key={idx} />;
                      })}
                    </>
                  </div>
                </div>
              </div>
            </footer>

            <p className="text-gray-500 dark:text-gray-400">{review.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Comment;
