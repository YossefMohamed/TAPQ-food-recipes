import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Comment() {
  return (
    <section className="bg-white">
      <div className="">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Reviews (20)
          </h2>
        </div>
        <form className="">
          <div className="py-2 px-4  bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows={6}
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Post comment
          </button>
        </form>
        <article className="py-6 mb-6 text-base border-y bg-white rounded-lg dark:bg-gray-900">
          <footer className="flex justify-between items-center mb-6 ">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img
                  className="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Michael Gough"
                />
                Michael Gough
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time dateTime="2022-02-08" title="February 8th, 2022">
                  Feb. 8, 2022
                </time>
              </p>
              <div className="rating flex gap-2 items-center mx-4">
                <div className="text-main flex items-center">
                  <AiFillStar /> <AiFillStar /> <AiFillStar />
                  <AiFillStar /> <AiOutlineStar />
                </div>
              </div>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">
            Very straight-to-point article. Really worth time reading. Thank
            you! But tools are just the instruments for the UX designers. The
            knowledge of the design tools are as important as the creation of
            the design strategy.
          </p>
        </article>
        <article className="py-6 mb-6 text-base border-y bg-white rounded-lg dark:bg-gray-900">
          <footer className="flex justify-between items-center mb-6 ">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img
                  className="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Michael Gough"
                />
                Michael Gough
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time dateTime="2022-02-08" title="February 8th, 2022">
                  Feb. 8, 2022
                </time>
              </p>
              <div className="rating flex gap-2 items-center mx-4">
                <div className="text-main flex items-center">
                  <AiFillStar /> <AiFillStar /> <AiFillStar />
                  <AiFillStar /> <AiOutlineStar />
                </div>
              </div>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">
            Very straight-to-point article. Really worth time reading. Thank
            you! But tools are just the instruments for the UX designers. The
            knowledge of the design tools are as important as the creation of
            the design strategy.
          </p>
        </article>
        <article className="py-6 mb-6 text-base border-y bg-white rounded-lg dark:bg-gray-900">
          <footer className="flex justify-between items-center mb-6 ">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img
                  className="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Michael Gough"
                />
                Michael Gough
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time dateTime="2022-02-08" title="February 8th, 2022">
                  Feb. 8, 2022
                </time>
              </p>
              <div className="rating flex gap-2 items-center mx-4">
                <div className="text-main flex items-center">
                  <AiFillStar /> <AiFillStar /> <AiFillStar />
                  <AiFillStar /> <AiOutlineStar />
                </div>
              </div>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">
            Very straight-to-point article. Really worth time reading. Thank
            you! But tools are just the instruments for the UX designers. The
            knowledge of the design tools are as important as the creation of
            the design strategy.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Comment;
