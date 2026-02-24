import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Modules = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);

  return (
    <>
      <div className="max-w-6xl mx-auto border border-gray-200 rounded-2xl overflow-hidden my-5 ">
        {/* Module 1 */}
        <button
          onClick={() => setOpen1(!open1)}
          className="w-full flex items-start sm:items-center justify-between 
px-4 sm:px-6 py-4 
bg-white hover:bg-gray-50 transition"
        >
          <h2 className="text-[15px] sm:text-base md:text-lg font-bold text-gray-900 text-left leading-snug">
            Module 1: Python Programming Fundamentals and Flow Control (3 Weeks)
          </h2>

          <ChevronDown
            className={`transition-transform duration-300 ${
              open1 ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`px-6 overflow-hidden transition-all duration-300 bg-white ${
            open1 ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <ul className="space-y-2 text-gray-700 lg:text-lg text-sm list-disc pl-6 marker:text-gray-700 leading-relaxed marker:text-sm">
            <li>Master core Python syntax</li>
            <li>Work with lists, dictionaries, tuples, and sets</li>
            <li>
              Implement complex decision-making logic using if/else statements
              and loops
            </li>
            <li>
              Develop clean and reusable code through custom function
              definitions
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border border-gray-200 rounded-2xl overflow-hidden my-5 ">
        {/* Module 2 */}
        <button
          onClick={() => setOpen2(!open2)}
          className="w-full flex items-start sm:items-center justify-between 
px-4 sm:px-6 py-4 
bg-white hover:bg-gray-50 transition"
        >
          <h2 className="text-[15px]  sm:text-base md:text-lg font-bold text-gray-900 text-left leading-snug">
            Module 2: The Data Handling Toolkit: NumPy and Pandas (3 Weeks)
          </h2>

          <ChevronDown
            className={`transition-transform duration-300 ${
              open2 ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`px-6 overflow-hidden transition-all duration-300 bg-white ${
            open2 ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <ul className="space-y-2 text-gray-700 lg:text-lg text-sm list-disc pl-6 marker:text-gray-700 leading-relaxed marker:text-sm">
            <li>
              Leverage NumPy for high-speed numerical operations and
              vectorization
            </li>
            <li>
              Master the Pandas DataFrame for structured data import and
              inspection
            </li>
            <li>
              Apply professional data cleaning techniques to handle missing
              values and formatting
            </li>
            <li>
              Perform advanced data manipulation using grouping, filtering, and
              merging
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border border-gray-200 rounded-2xl overflow-hidden my-5 ">
        {/* Module 3 */}
        <button
          onClick={() => setOpen3(!open3)}
          className="w-full flex items-start sm:items-center justify-between 
px-4 sm:px-6 py-4 
bg-white hover:bg-gray-50 transition"
        >
          <h2 className="text-[15px]  sm:text-base md:text-lg font-bold text-gray-900 text-left leading-snug">
            Module 3: Statistical Thinking, Data Preparation, and ML Workflow (4
            Weeks)
          </h2>

          <ChevronDown
            className={`transition-transform duration-300 ${
              open3 ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`px-6 overflow-hidden transition-all duration-300 bg-white ${
            open3 ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <ul className="space-y-2 text-gray-700 lg:text-lg text-sm list-disc pl-6 marker:text-gray-700 leading-relaxed marker:text-sm">
            <li>
              Calculate and interpret key descriptive statistics to understand
              data distributions
            </li>
            <li>
              Create professional visualizations using Matplotlib and Seaborn
            </li>
            <li>
              Apply feature scaling and engineering techniques like
              normalization and standardization
            </li>
            <li>
              Define sequential steps for building reliable machine learning
              pipelines
            </li>
            <li>
              Implement the vital train-test-validation split for model
              reliability
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border border-gray-200 rounded-2xl overflow-hidden my-5 ">
        {/* Module 4 */}
        <button
          onClick={() => setOpen4(!open4)}
          className="w-full flex items-start sm:items-center justify-between 
px-4 sm:px-6 py-4 
bg-white hover:bg-gray-50 transition"
        >
          <h2 className="text-[15px]  sm:text-base md:text-lg font-bold text-gray-900 text-left leading-snug">
            Module 4: Core Supervised Learning: Regression and Classification (5
            Weeks)
          </h2>

          <ChevronDown
            className={`transition-transform duration-300 ${
              open4 ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`px-6 overflow-hidden transition-all duration-300 bg-white ${
            open4 ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <ul className="space-y-2 text-gray-700 lg:text-lg text-sm list-disc pl-6 marker:text-gray-700 leading-relaxed marker:text-sm">
            <li>
              Implement and evaluate simple and multiple linear regression
              models
            </li>
            <li>
              Master regression metrics including Mean Squared Error and
              R-squared
            </li>
            <li>
              Build classification models using logistic regression and decision
              trees
            </li>
            <li>
              Evaluate categories using confusion matrices, precision, recall,
              and F1-scores
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border border-gray-200 rounded-2xl overflow-hidden my-5 ">
        {/* Module 5 */}
        <button
          onClick={() => setOpen5(!open5)}
          className="w-full flex items-start sm:items-center justify-between 
px-4 sm:px-6 py-4 
bg-white hover:bg-gray-50 transition"
        >
          <h2 className="text-[15px]  sm:text-base md:text-lg font-bold text-gray-900 text-left leading-snug">
            Module 5: Advanced ML concepts and Unsupervised Learning (5 Weeks)
          </h2>

          <ChevronDown
            className={`transition-transform duration-300 ${
              open5 ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`px-6 overflow-hidden transition-all duration-300 bg-white ${
            open5 ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <ul className="space-y-2 text-gray-700 lg:text-lg text-sm list-disc pl-6 marker:text-gray-700 leading-relaxed marker:text-sm">
            <li>
              Address model robustness through the bias-variance trade-off and
              cross-validation
            </li>
            <li>
              Implement ensemble methods like random forests and master gradient
              boosting intuition
            </li>
            <li>
              Optimize model settings for peak performance using hyperparameter
              tuning
            </li>
            <li>
              Discover hidden patterns and segment data using K-means clustering
              (unsupervised learning)
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border border-gray-200 rounded-2xl overflow-hidden my-5 ">
        {/* Module 6 */}
        <button
          onClick={() => setOpen6(!open6)}
          className="w-full flex items-start sm:items-center justify-between 
px-4 sm:px-6 py-4 
bg-white hover:bg-gray-50 transition"
        >
          <h2 className="text-[15px]  sm:text-base md:text-lg font-bold text-gray-900 text-left leading-snug">
            Module 6: Advanced Generative AI Concepts and Tools (4 Weeks)
          </h2>

          <ChevronDown
            className={`transition-transform duration-300 ${
              open6 ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`px-6 overflow-hidden transition-all duration-300 bg-white ${
            open6 ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <ul className="space-y-2 text-gray-700 lg:text-lg text-sm list-disc pl-6 marker:text-gray-700 leading-relaxed marker:text-sm">
            <li>
              Explore the landscape of foundation models including GPT, Gemini,
              and Llama
            </li>
            <li>
              Master advanced prompt engineering techniques like
              chain-of-thought and few-shot prompting
            </li>
            <li>
              Understand RAG architectures for building grounded and accurate AI
              applications
            </li>
            <li>
              Build autonomous AI agents using planning and tool-usage
              frameworks
            </li>
            <li>
              Learn how vector databases and embeddings enable semantic search
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border border-gray-200 rounded-2xl overflow-hidden my-5 ">
        {/* Module 7 */}
        <button
          onClick={() => setOpen7(!open7)}
          className="w-full flex items-start sm:items-center justify-between 
px-4 sm:px-6 py-4 
bg-white hover:bg-gray-50 transition"
        >
          <h2 className="text-[15px]  sm:text-base md:text-lg font-bold text-gray-900 text-left leading-snug">
            Module 7: Capstone Project and Final Presentation (2 Weeks)
          </h2>

          <ChevronDown
            className={`transition-transform duration-300 ${
              open7 ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`px-6 overflow-hidden transition-all duration-300 bg-white ${
            open7 ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <ul className="space-y-2 text-gray-700 lg:text-lg text-sm list-disc pl-6 marker:text-gray-700 leading-relaxed marker:text-sm">
            <li>
              Finalize project scope and perform end-to-end data sourcing and
              preparation
            </li>
            <li>
              Select and execute appropriate machine learning models for
              real-world problems
            </li>
            <li>
              Conduct rigorous model evaluations and document the entire
              analytical process
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Modules;
