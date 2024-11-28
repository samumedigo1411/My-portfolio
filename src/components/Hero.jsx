import React from "react";
import fotoSamuel from "../assets/img/fotosamuel2.jpg"; // Asegúrate de que la ruta sea correcta

export default function Hero() {
  return (
    <div className="flex-container">
      <img
        src={fotoSamuel}
        alt="Foto de Samuel Medina"
        className="mr-8 w-64 h-64 object-cover rounded-full"
      />
      <div>
        <h1 style={{ marginTop: "10px", textAlign: "left" }}>Hello!</h1>
        <h2 style={{ textAlign: "left" }}>I'm Samuel Medina Gonzalez</h2>
      </div>
    </div>
  );
}
