/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const handleNavigate = (url: string) => {
    navigate(url);
  }

  return (
    <NavigationMenu>
      {/* Usamos group para mantener hover entre trigger y dropdown */}
      <div
        className="relative flex items-start group"
        onMouseLeave={() => setActiveItem(null)}
      >
        {/* Menú lateral */}
        <NavigationMenuList className="flex flex-col items-start gap-2 z-10">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="ponter" onClick={() => handleNavigate('/fotografia')} onMouseEnter={() => setActiveItem("item1")}>
              Fotografía & filmación
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="ponter" onClick={() => handleNavigate('/electronica')} onMouseEnter={() => setActiveItem("item2")}>
              Electrónica
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="ponter" onMouseEnter={() => setActiveItem("item3")}>
              Informática
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="ponter" onMouseEnter={() => setActiveItem("item4")}>
              Videojuegos & juguetes
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="ponter" onMouseEnter={() => setActiveItem("item5")}>
              Belleza, salud & cosméticos
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="ponter" onMouseEnter={() => setActiveItem("item6")}>
              Electrodomésticos
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="ponter" onMouseEnter={() => setActiveItem("item7")}>
              Muebles
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="ponter" onMouseEnter={() => setActiveItem("item8")}>
              Deportes & Fitness
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="ponter" onMouseEnter={() => setActiveItem("item9")}>
              Accesorio para auto & moto
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Dropdown pegado al menú (sin espacio) */}
        {activeItem && (
          <div
            className="absolute top-0 left-full w-fit p-4 border rounded-md shadow-lg z-0"
          >
            {activeItem === "item1" && (
              <div className="flex gap-2 w-10/12 ">
                <div className="w-full">
                  <NavigationMenuLink className="font-semibold" asChild>
                    <Link to="/camaras">Cámaras</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink>Compactas</NavigationMenuLink>
                  <NavigationMenuLink>Especial Zoom</NavigationMenuLink>
                  <NavigationMenuLink>Reflex/Mirrorless</NavigationMenuLink>
                  <NavigationMenuLink className="font-semibold">Drones</NavigationMenuLink>
                  <NavigationMenuLink className="whitespace-nowrap">Drones & cuadricópteros</NavigationMenuLink>
                  <NavigationMenuLink>Accesorios</NavigationMenuLink>
                  <NavigationMenuLink className="font-semibold">Accesorios</NavigationMenuLink>
                  <NavigationMenuLink>Baterias & Cargadores</NavigationMenuLink>
                  <NavigationMenuLink>Flash</NavigationMenuLink>
                  <NavigationMenuLink>Lentes</NavigationMenuLink>
                  <NavigationMenuLink>Memoria</NavigationMenuLink>
                  <NavigationMenuLink>Mochilas & Estuche</NavigationMenuLink>
                  <NavigationMenuLink>Tripode & Monopies</NavigationMenuLink>
                  <NavigationMenuLink>Otros accesorios</NavigationMenuLink>
                  <NavigationMenuLink>LED</NavigationMenuLink>
                </div>
                
                <div>
                  <NavigationMenuLink className="font-semibold">Filmadoras</NavigationMenuLink>
                  <NavigationMenuLink>Compactas</NavigationMenuLink>
                  <NavigationMenuLink className="whitespace-nowrap">Deportes y Acción</NavigationMenuLink>
                  <NavigationMenuLink>Profesionales</NavigationMenuLink>
                </div>
              </div>
            )}

            {activeItem === "item2" && (
              <div className="flex flex-col gap-2">
                <NavigationMenuLink>Start Home</NavigationMenuLink>
                <NavigationMenuLink>Interruptores Inteligentes</NavigationMenuLink>
                <NavigationMenuLink>Lámparas Inteligentes</NavigationMenuLink>
                <NavigationMenuLink>Sensores</NavigationMenuLink>
                <NavigationMenuLink>Grifos Inteligentes</NavigationMenuLink>
                <NavigationMenuLink>Cerraduras digitales</NavigationMenuLink>
                <NavigationMenuLink>Monitoreo y Seguridad</NavigationMenuLink>
              </div>
            )}

            {activeItem === "item3" && (
              <div className="flex flex-col gap-2">
                <NavigationMenuLink>Link 3A</NavigationMenuLink>
                <NavigationMenuLink>Link 3B</NavigationMenuLink>
              </div>
            )}
          </div>
        )}
      </div>
    </NavigationMenu>
  );
};

export default NavBar;
