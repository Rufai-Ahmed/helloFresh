import { iFoot, iNav, iQuestion, iWhy } from "@/services/interface";

import img1 from "../asset/why-hellofresh-icn1.png";
import img2 from "../asset/why-hellofresh-icn2.png";
import img3 from "../asset/why-hellofresh-icn3.png";
import img4 from "../asset/why-hellofresh-icn4.png";
import Image from "next/image";
import mastercard from "../asset/mc.svg";
import visa from "../asset/visa_logo.svg";
import discover from "../asset/discovernet.svg";
import express from "../asset/amex_logo.svg";
import paypal from "../asset/paypal.svg";
import appsto from "../asset/appstore-badge-en.png";
import gplay from "../asset/playstore-badge-en.webp";

export const navData: iNav[] = [
  {
    text: "Our Plans",
  },
  {
    text: "About Us",
    dropDown: [
      { text: "About Us" },
      { text: "Our Stories" },
      { text: "How It Works" },
    ],
  },
  {
    text: "Our Menus",
    dropDown: [{ text: "Our Menus" }, { text: "Cookbook" }],
  },
  {
    text: "Gift Cards",
  },
  {
    text: "Sustainability",
    dropDown: [
      { text: "Sustainability" },
      { text: "Our Sustainability team" },
      { text: "Recycling and Packaging" },
      { text: "Cut back on food waste" },
      { text: "Reduce your carbon footprint" },
      { text: "Suppliers" },
      { text: "Social impact" },
      { text: "Hunger matters" },
    ],
  },
  {
    text: "HelloFresh for Teams",
  },
];

export const whyData: iWhy[] = [
  {
    img: img1,
    boldTxt: "No skimpin’ on the chicken!",
    text: "Or steak, or fish, or plant protein.",
  },
  {
    img: img2,
    boldTxt: "No commitment whatsoever",
    text: "Skipping weeks or cancelling is super easy.",
  },
  {
    img: img3,
    boldTxt: "The most 5-star reviews",
    text: "Our huge recipe selection wows week after week.",
  },
  {
    img: img4,
    boldTxt: "Fresh and affordable",
    text: "Chef-created deliciousness from $9.99 per meal.",
  },
];

export const questionData: iQuestion[] = [
  {
    question: "How can I redeem my free dessert item for life?",
    ans: (
      <ol>
        <li>1. Sign up to HelloFresh and pick your meals for the week.</li>
        <li>
          2. After meal selection, you’ll be taken to HelloFresh Market, where
          you can pick one item from our delicious assortment of desserts.
        </li>
        <li>
          3. Receive the free dessert in your next meal kit delivery box and
          enjoy!
        </li>
        <li>4.Make sure you pick one item for each of your weekly boxes.</li>
      </ol>
    ),
  },
  {
    question: "How does HelloFresh’s meal kit delivery service work?",
    ans: "Our meal delivery services allow you to skip meal planning and grocery shopping. HelloFresh delivers step-by-step recipes and fresh, pre-portioned ingredients right to your door in convenient meal kits. First, you set your meal plan preferences with options for carnivores, vegetarians, families, calorie-counters, and more. You’ll choose from 45+ delicious weekly recipes carefully put together by our chefs. Then, you’ll receive those recipes with easy-to-follow instructions on the day of your choosing. You can also skip a week or cancel your meal delivery anytime if your needs change.",
  },
  {
    question: "Which food meal plans & recipes does HelloFresh offer?",
    ans: "HelloFresh offers a variety of meal plans to suit different dietary preferences and lifestyles, including classic, family-friendly, vegetarian, calorie-smart, and more. Each week, you can choose from a selection of 45+ delicious recipes curated by our chefs. Whether you're a meat lover, vegetarian, or looking for healthier options, HelloFresh has something for everyone.",
  },
  {
    question: "How many times a week does HelloFresh deliver?",
    ans: "HelloFresh offers flexible delivery options. You can choose to receive deliveries once a week, twice a week, or even less frequently, depending on your preferences and meal plan.",
  },
  {
    question: "Does HelloFresh give nutrition & calorie information?",
    ans: "Yes, HelloFresh provides nutrition and calorie information for all of its recipes. Each recipe card includes detailed nutritional information, including calories, fat, protein, carbohydrates, and more. This allows you to make informed choices about your meals and track your dietary intake.",
  },
  {
    question: "How do I recycle my HelloFresh meal box?",
    ans: "HelloFresh is committed to sustainability. You can recycle your HelloFresh meal box by flattening it and placing it in your curbside recycling bin. Alternatively, you can check with your local recycling center for specific guidelines on cardboard recycling in your area.",
  },
  {
    question: "Why should I choose HelloFresh as my meal kit delivery service?",
    ans: "HelloFresh offers several benefits that make it a great choice for meal kit delivery. These include convenient meal planning and grocery shopping, fresh and high-quality ingredients, a wide variety of delicious recipes to choose from, flexible delivery options, and detailed nutritional information provided for each recipe. Additionally, HelloFresh is committed to sustainability and reducing food waste.",
  },
  {
    question: "How much does a HelloFresh meal delivery subscription cost?",
    ans: "HelloFresh offers different meal plans at varying prices to suit different budgets and dietary preferences. Prices depend on factors such as the number of meals per week, the number of servings per meal, and any additional customization options. You can visit the HelloFresh website to view current pricing and available meal plans in your area.",
  },
  {
    question: "Do HelloFresh meal kits support a healthy lifestyle?",
    ans: "Yes, HelloFresh meal kits are designed to support a healthy lifestyle. They include a variety of fresh and nutritious ingredients, balanced recipes curated by chefs, and detailed nutritional information to help you make informed choices. HelloFresh also offers calorie-smart meal options and vegetarian meal plans, making it suitable for various dietary preferences and lifestyles.",
  },
  {
    question: "Can I skip a week of meal kit delivery?",
    ans: "Yes, you can skip a week of meal kit delivery with HelloFresh. HelloFresh offers flexibility and convenience, allowing you to manage your deliveries according to your schedule and preferences. You can easily skip a week or pause your subscription at any time through your HelloFresh account.",
  },
];

export const footData: iFoot[] = [
  {
    h5: "HelloFresh",
    divs: (
      <>
        {" "}
        <div>Students</div>
        <div>Blog</div>
        <div>Recipes</div>
        <div>Hero Discounts</div>
        <div>Recipe Directory</div>
        <div>California Supply Chain</div>
        <div>Act</div>
        <div>Delivery Options</div>
      </>
    ),
  },
  {
    h5: "Our Company",
    divs: (
      <>
        {" "}
        <div>Students</div>
        <div>Blog</div>
        <div>Recipes</div>
        <div>Hero Discounts</div>
      </>
    ),
  },
  {
    h5: "Work with us",
    divs: (
      <>
        {" "}
        <div>Students</div>
        <div>Blog</div>
        <div>Recipes</div>
      </>
    ),
  },
  {
    h5: "Contact us",
    divs: (
      <>
        {" "}
        <div>Students</div>
        <div>Blog</div>
        <div>Recipes</div>
        <div>Hero Discounts</div>
        <div>Recipe Directory</div>
      </>
    ),
  },
  {
    h5: "Payment Methods",
    divs: (
      <div className=" flex-wrap w-[150px] lg:grid flex lg:grid-cols-2">
        <Image alt="jbdfjwn" src={mastercard} width={100} height={100} />
        <Image alt="jbdfjwn" src={visa} width={100} height={100} />
        <Image alt="jbdfjwn" src={discover} width={100} height={100} />
        {/* <Image src={express} width={100} height={100} /> */}
        <Image alt="jbdfjwn" src={paypal} width={100} height={100} />
      </div>
    ),
  },
  {
    h5: "Download our app",
    divs: (
      <div className="no-underline">
        Manage your deliveries from anywhere, anytime.
        <div className="flex gap-4 items-center mt-5">
          <Image src={appsto} width={120} height={100} />
          <Image src={gplay} width={120} height={100} />
        </div>
      </div>
    ),
  },
];
