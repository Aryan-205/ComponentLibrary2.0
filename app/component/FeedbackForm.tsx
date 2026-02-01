"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState(true);

  return (
    <div
      className="w-full h-full flex justify-center items-center bg-black"
      onClick={() => setFeedback(true)}
    >
      <motion.div layout layoutId="container" className="bg-gray-100 rounded-xl p-1 relative">
        <AnimatePresence mode="popLayout">
          {feedback ? (
            <motion.p
              layout
              layoutId="textarea"
              onClick={(e) => {
                e.stopPropagation();
                setFeedback(false);
              }}
              className="px-4 py-2 font-medium cursor-pointer text-black"
            >
              Feedback
            </motion.p>
          ) : (
            <motion.div
              layout
              className="bg-white rounded-lg w-80 h-40"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.textarea
                layout
                layoutId="textarea"
                placeholder="Feedback"
                className="w-full bg-white p-2 h-28 text-black"
              />
              <div className="flex justify-end w-full px-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  send feedback
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
