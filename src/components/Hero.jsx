import React from "react";
import fotoSamuel from "../assets/img/fotosamuel2.jpg"; // Asegúrate de que la ruta sea correcta

export default function Hero() {
  return (
    <div className="flex-container flex flex-col sm:flex-row items-center justify-center py-8 sm:py-16">
      <img
        src={fotoSamuel}
        alt="Foto de Samuel Medina"
        className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-full mb-6 sm:mb-0"
      />
      <div className="text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Hello!</h1>
        <h2 className="text-xl sm:text-2xl">I'm Samuel Medina Gonzalez</h2>
      </div>
    </div>
  );
}
