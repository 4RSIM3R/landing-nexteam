"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Plus, Minus, Calculator, Users, Calendar } from "lucide-react";

interface TeamMember {
  role: string;
  price: number;
  months: number;
  quantity: number;
}

interface Addon {
  name: string;
  price: number;
  months: number;
  enabled: boolean;
}

export function PricingSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { role: "fullstack", price: 500, months: 1, quantity: 1 },
  ]);

  const [addons, setAddons] = useState<Addon[]>([
    { name: "dedicated design team", price: 1000, months: 1, enabled: false },
    {
      name: "dedicated seo / digital marketing team",
      price: 1000,
      months: 1,
      enabled: false,
    },
  ]);

  const roleOptions = [
    { key: "fullstack", label: "Fullstack Developer", price: 500 },
    { key: "devops", label: "DevOps Engineer", price: 750 },
    { key: "project_manager", label: "Project Manager", price: 500 },
    { key: "qa", label: "Quality Assurance", price: 500 },
  ];

  const addTeamMember = (roleKey: string) => {
    const selectedRole = roleOptions.find((r) => r.key === roleKey);
    setTeamMembers([
      ...teamMembers,
      {
        role: roleKey,
        price: selectedRole?.price || 500,
        months: 1,
        quantity: 1,
      },
    ]);
  };

  const removeTeamMember = (index: number) => {
    if (teamMembers.length > 1) {
      setTeamMembers(teamMembers.filter((_, i) => i !== index));
    }
  };

  const updateTeamMember = (
    index: number,
    field: keyof TeamMember,
    value: string | number
  ) => {
    const updated = [...teamMembers];
    if (field === "role") {
      const selectedRole = roleOptions.find((r) => r.key === value);
      updated[index] = {
        ...updated[index],
        role: value as string,
        price: selectedRole?.price || 500,
      };
    } else {
      updated[index] = { ...updated[index], [field]: value };
    }
    setTeamMembers(updated);
  };

  const updateAddon = (
    index: number,
    field: keyof Addon,
    value: boolean | number
  ) => {
    const updated = [...addons];
    updated[index] = { ...updated[index], [field]: value };
    setAddons(updated);
  };

  const calculateTotal = () => {
    const teamTotal = teamMembers.reduce(
      (sum, member) => sum + member.price * member.months * member.quantity,
      0
    );
    const addonTotal = addons
      .filter((addon) => addon.enabled)
      .reduce((sum, addon) => sum + addon.price * addon.months, 0);
    return teamTotal + addonTotal;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section
      id="pricing"
      className="relative py-20 lg:py-32 bg-white"
      aria-label="Pricing calculator and budget estimation"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Fair and transparent pricing
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Calculate your project budget based on team composition and
            timeline. No hidden fees, no surprises—just honest pricing for
            quality development.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Calculator Section */}
            <div className="space-y-8">
              {/* Team Members */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-5 h-5 text-gray-600" />
                  <h3 className="text-xl font-semibold text-black">
                    Team Composition
                  </h3>
                </div>

                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 space-y-4 border border-gray-200"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">
                          Team Member {index + 1}
                        </h4>
                        <button
                          onClick={() => removeTeamMember(index)}
                          disabled={teamMembers.length === 1}
                          className="p-1 text-gray-400 hover:text-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          aria-label="Remove team member"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Role
                          </label>
                          <select
                            value={member.role}
                            onChange={(e) =>
                              updateTeamMember(index, "role", e.target.value)
                            }
                            className="w-full p-3 border border-gray-200 rounded-lg bg-white text-sm focus:ring-2 focus:ring-black focus:border-transparent"
                          >
                            {roleOptions.map((option) => (
                              <option key={option.key} value={option.key}>
                                {option.label} - {formatCurrency(option.price)}
                                /month
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Headcount
                          </label>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateTeamMember(
                                  index,
                                  "quantity",
                                  Math.max(1, member.quantity - 1)
                                )
                              }
                              className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={member.quantity}
                              onChange={(e) =>
                                updateTeamMember(
                                  index,
                                  "quantity",
                                  parseInt(e.target.value) || 1
                                )
                              }
                              className="w-16 p-2 text-center border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-black focus:border-transparent"
                            />
                            <button
                              onClick={() =>
                                updateTeamMember(
                                  index,
                                  "quantity",
                                  member.quantity + 1
                                )
                              }
                              className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Duration (months)
                          </label>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateTeamMember(
                                  index,
                                  "months",
                                  Math.max(1, member.months - 1)
                                )
                              }
                              className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                              aria-label="Decrease months"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={member.months}
                              onChange={(e) =>
                                updateTeamMember(
                                  index,
                                  "months",
                                  parseInt(e.target.value) || 1
                                )
                              }
                              className="w-16 p-2 text-center border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-black focus:border-transparent"
                            />
                            <button
                              onClick={() =>
                                updateTeamMember(
                                  index,
                                  "months",
                                  member.months + 1
                                )
                              }
                              className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                              aria-label="Increase months"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        <span className="text-sm text-gray-600">Subtotal:</span>
                        <span className="font-mono font-semibold text-black">
                          {formatCurrency(
                            member.price * member.months * member.quantity
                          )}
                        </span>
                      </div>
                    </div>
                  ))}

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3 text-center">
                      Add Team Member
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {roleOptions.map((role) => (
                        <button
                          key={role.key}
                          onClick={() => addTeamMember(role.key)}
                          className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-left transition-colors group hover:shadow-sm"
                        >
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900 group-hover:text-black">
                              {role.label}
                            </div>
                            <div className="text-xs text-gray-500">
                              {formatCurrency(role.price)}/month
                            </div>
                          </div>
                          <Plus className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Add-ons */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <h3 className="text-xl font-semibold text-black">
                    Additional Services
                  </h3>
                </div>

                <div className="space-y-4">
                  {addons.map((addon, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={addon.enabled}
                          onChange={(e) =>
                            updateAddon(index, "enabled", e.target.checked)
                          }
                          className="mt-1 w-4 h-4 text-black border-gray-300 rounded focus:ring-black focus:ring-2"
                        />
                        <div className="flex-1 space-y-3">
                          <div>
                            <h4 className="font-medium text-gray-900 capitalize">
                              {addon.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              Starting from {formatCurrency(addon.price)} per
                              month
                            </p>
                          </div>

                          {addon.enabled && (
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-600">
                                Duration (months):
                              </span>
                              <button
                                onClick={() =>
                                  updateAddon(
                                    index,
                                    "months",
                                    Math.max(1, addon.months - 1)
                                  )
                                }
                                className="p-1 border border-gray-200 rounded hover:bg-gray-100 transition-colors"
                                aria-label="Decrease months"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={addon.months}
                                onChange={(e) =>
                                  updateAddon(
                                    index,
                                    "months",
                                    parseInt(e.target.value) || 1
                                  )
                                }
                                className="w-12 p-1 text-center border border-gray-200 rounded text-sm focus:ring-1 focus:ring-black focus:border-transparent"
                              />
                              <button
                                onClick={() =>
                                  updateAddon(index, "months", addon.months + 1)
                                }
                                className="p-1 border border-gray-200 rounded hover:bg-gray-100 transition-colors"
                                aria-label="Increase months"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                              <span className="ml-auto font-mono font-semibold text-black">
                                {formatCurrency(addon.price * addon.months)}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="w-5 h-5 text-gray-600" />
                  <h3 className="text-xl font-semibold text-black">
                    Budget Estimation
                  </h3>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Team summary */}
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        Total Team Size
                      </span>
                      <span className="text-sm font-semibold text-black">
                        {teamMembers.reduce(
                          (sum, member) => sum + member.quantity,
                          0
                        )}{" "}
                        people
                      </span>
                    </div>
                  </div>

                  {/* Team breakdown */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">
                      Team Members
                    </h4>
                    {teamMembers.map((member, index) => {
                      const role = roleOptions.find(
                        (r) => r.key === member.role
                      );
                      return (
                        <div
                          key={index}
                          className="flex justify-between items-center py-1"
                        >
                          <span className="text-sm text-gray-600">
                            {role?.label} × {member.quantity} headcount ×{" "}
                            {member.months}
                            mo
                          </span>
                          <span className="font-mono text-sm text-black">
                            {formatCurrency(
                              member.price * member.months * member.quantity
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Addons breakdown */}
                  {addons.some((addon) => addon.enabled) && (
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">
                        Additional Services
                      </h4>
                      {addons
                        .filter((addon) => addon.enabled)
                        .map((addon, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center py-1"
                          >
                            <span className="text-sm text-gray-600 capitalize">
                              {addon.name} × {addon.months}mo
                            </span>
                            <span className="font-mono text-sm text-black">
                              {formatCurrency(addon.price * addon.months)}
                            </span>
                          </div>
                        ))}
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold text-black">
                      Total Estimation
                    </span>
                    <span className="text-2xl font-mono font-bold text-black">
                      {formatCurrency(calculateTotal())}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <Button
                      className="w-full bg-black text-white hover:bg-gray-800 font-medium py-3"
                      asChild
                    >
                      <a href="#contact">Get detailed quote</a>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                    >
                      Schedule consultation
                    </Button>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    This is an estimated budget based on standard rates. Final
                    pricing may vary based on project complexity and specific
                    requirements.
                  </p>
                </div>
              </div>

              {/* Help section */}
              <div className="mt-6 bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-black mb-3">
                  Don't know where to start?
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Our team can help you determine the right composition and
                  timeline for your project.
                </p>
                <Button variant="outline" className="w-full text-sm">
                  Let's have a talk
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
