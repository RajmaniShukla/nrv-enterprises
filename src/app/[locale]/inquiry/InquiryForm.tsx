"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
};

export default function InquiryForm() {
  const t = useTranslations("inquiry.form");
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product") || "";
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { product: productParam },
  });

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_INQUIRY_TEMPLATE_ID!,
        {
          from_name: data.name,
          company: data.company,
          from_email: data.email,
          phone: data.phone,
          product: data.product,
          quantity: data.quantity,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
      hasError ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"
    }`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {t("name")} <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name", { required: true })}
            className={inputClass(!!errors.name)}
            placeholder={t("name")}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {t("company")}
          </label>
          <input
            {...register("company")}
            className={inputClass(false)}
            placeholder={t("company")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {t("email")} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className={inputClass(!!errors.email)}
            placeholder={t("email")}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {t("phone")} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            {...register("phone", { required: true })}
            className={inputClass(!!errors.phone)}
            placeholder={t("phone")}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Product */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {t("product")} <span className="text-red-500">*</span>
          </label>
          <input
            {...register("product", { required: true })}
            className={inputClass(!!errors.product)}
            placeholder={t("product")}
          />
          {errors.product && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {t("quantity")}
          </label>
          <input
            {...register("quantity")}
            className={inputClass(false)}
            placeholder={t("quantity")}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {t("message")}
        </label>
        <textarea
          rows={4}
          {...register("message")}
          className={inputClass(false) + " resize-none"}
          placeholder={t("message")}
        />
      </div>

      {/* Status */}
      {status === "success" && (
        <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm">
          <CheckCircle size={16} /> {t("success")}
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
          <AlertCircle size={16} /> {t("error")}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white font-bold py-3.5 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Send size={17} />
        {status === "sending" ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}
