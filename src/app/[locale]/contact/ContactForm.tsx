"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {t("name")} <span className="text-red-500">*</span>
        </label>
        <input
          {...register("name", { required: true })}
          className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
            errors.name ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"
          }`}
          placeholder={t("name")}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">Required</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {t("email")} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          {...register("email", { required: true })}
          className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
            errors.email ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"
          }`}
          placeholder={t("email")}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">Required</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {t("phone")}
        </label>
        <input
          type="tel"
          {...register("phone")}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder={t("phone")}
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {t("message")} <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={5}
          {...register("message", { required: true })}
          className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none ${
            errors.message ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"
          }`}
          placeholder={t("message")}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">Required</p>}
      </div>

      {/* Status messages */}
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

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white font-bold py-3.5 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Send size={17} />
        {status === "sending" ? t("sending") : t("send")}
      </button>
    </form>
  );
}
