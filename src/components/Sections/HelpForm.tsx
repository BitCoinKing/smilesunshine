"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const HelpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  age: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().optional(),
  description: z.string().min(10, "Please provide at least 10 characters"),
  contactMethod: z.string().min(1, "Please select a contact method"),
});

type HelpFormValues = z.infer<typeof HelpSchema>;

import { motion } from "framer-motion";
import { useReveal } from "@/lib/useReveal";

export function HelpForm() {
  const { ref, containerVariants } = useReveal();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<HelpFormValues>({
    resolver: zodResolver(HelpSchema),
  });

  const onSubmit = async (data: HelpFormValues) => {
    console.log("HELP FORM SUBMIT (placeholder)", data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // TODO: Replace with API call (e.g. Next.js route handler)
  };

  return (
    <section id="need-help" className="bg-ss-surface">
      <div className="ss-section max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">I Need Help</h2>
          <p className="mt-3 text-sm sm:text-base text-ss-muted">
            You're not alone. Share what you're going through. Our team will read
            every message with care and respond as soon as we can.
          </p>

        {isSubmitSuccessful ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <p className="text-green-800 font-semibold">Thank you for trusting us. We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-ss-text mb-1">
                  First Name *
                </label>
                <input
                  {...register("firstName")}
                  id="firstName"
                  type="text"
                  className="w-full rounded-xl bg-white text-slate-900 border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ss-primary/70"
                />
                {errors.firstName && (
                  <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-ss-text mb-1">
                  Last Name *
                </label>
                <input
                  {...register("lastName")}
                  id="lastName"
                  type="text"
                  className="w-full rounded-xl bg-white text-slate-900 border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ss-primary/70"
                />
                {errors.lastName && (
                  <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium text-ss-text mb-1">
                Age
              </label>
              <input
                {...register("age")}
                id="age"
                type="text"
                className="w-full rounded-xl bg-white text-slate-900 border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ss-primary/70"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ss-text mb-1">
                Email *
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className="w-full rounded-xl bg-white text-slate-900 border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ss-primary/70"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-ss-text mb-1">
                City/Zip
              </label>
              <input
                {...register("city")}
                id="city"
                type="text"
                className="w-full rounded-xl bg-white text-slate-900 border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ss-primary/70"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-ss-text mb-1">
                How can we help? *
              </label>
              <textarea
                {...register("description")}
                id="description"
                rows={4}
                className="w-full rounded-xl bg-white text-slate-900 border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ss-primary/70 resize-none"
                placeholder="Share what's on your mind..."
              />
              {errors.description && (
                <p className="text-red-600 text-sm mt-1">{errors.description.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="contactMethod" className="block text-sm font-medium text-ss-text mb-1">
                Preferred Contact Method *
              </label>
              <select
                {...register("contactMethod")}
                id="contactMethod"
                className="w-full rounded-xl bg-white text-slate-900 border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ss-primary/70"
              >
                <option value="">Select...</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="other">Other</option>
              </select>
              {errors.contactMethod && (
                <p className="text-red-600 text-sm mt-1">{errors.contactMethod.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-ss-primary text-black font-semibold py-3 hover:bg-ss-primary/90 transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
        </motion.div>
      </div>
    </section>
  );
}
