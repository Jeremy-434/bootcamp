import { Button, Input, Label } from "@/components/ui/";
import React from "react";

const SimpleForm: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Formulario de Contacto</h2>

      <form>
        {/* Nombre */}
        <div className="mb-4">
          <Label htmlFor="name">Nombre</Label>
          <Input
            type="text"
            id="name"
            className="mt-2 block w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Ingresa tu nombre"
          />
        </div>

        {/* Correo Electrónico */}
        <div className="mb-4">
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input
            type="email"
            id="email"
            className="mt-2 block w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Ingresa tu correo electrónico"
          />
        </div>

        {/* Mensaje */}
        <div className="mb-6">
          <Label htmlFor="message">Mensaje</Label>
          <textarea
            id="message"
            className="mt-2 block w-full p-2 border border-gray-300 rounded-lg"
            rows={4}
            placeholder="Escribe tu mensaje"
          ></textarea>
        </div>

        {/* Botón de Enviar */}
        <Button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default SimpleForm;
