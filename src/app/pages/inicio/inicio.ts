import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto {
  nombre: string;
  modelo: string;
  precio: string;
  imagen: string;
  badge: string;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class InicioComponent {

  modalAbierto = false;
  productoSeleccionado: Producto | null = null;

  productos: Producto[] = [
    {
      nombre: 'Pantalla Hisense 65"',
      modelo: 'UHD 4K | VIDAA Smart TV | Modo Juego Plus',
      precio: '$9,999.00',
      imagen: 'assets/productos/hisense-9999.jpeg',
      badge: '⚽ Oferta Mundialista'
    },
    {
      nombre: 'Pantalla Hyundai 65" QLED',
      modelo: '4K | Google TV | Dolby Audio | HDR10',
      precio: '$8,999.00',
      imagen: 'assets/productos/hyundai-8999.jpeg',
      badge: '⚽ Oferta Mundialista'
    },
    {
      nombre: 'Estufa IEM',
      modelo: 'Modelo: EI3520BAP',
      precio: '$5,899.00',
      imagen: 'assets/productos/estufa-iem-5899.jpeg',
      badge: '🎁 Día del Padre'
    },
    {
      nombre: 'Pantalla Hisense 65" FIFA',
      modelo: 'Mod: 65A65NV | UHD 4K | Patrocinador FIFA',
      precio: '$9,999.00',
      imagen: 'assets/productos/hisense-mundial-9999.jpeg',
      badge: '⚽ Oferta Mundialista'
    },
    {
      nombre: 'Lavadora Koblenz 22kg',
      modelo: 'Modelo: LDM-22B | Doble tina',
      precio: '$6,600.00',
      imagen: 'assets/productos/lavadora-koblenz-6600.jpeg',
      badge: '🎁 Día del Padre'
    },
    {
      nombre: 'Mesa Cuadrada Quitapon',
      modelo: 'Color: Blanca | Resistente y fácil de limpiar',
      precio: '$499.00',
      imagen: 'assets/productos/mesa-quitapon-499.jpeg',
      badge: '🎁 Día del Padre'
    },
    {
      nombre: 'Refrigerador Mabe 8 Pies',
      modelo: 'Mod: RMA210PV | 208 Litros',
      precio: '$5,599.00',
      imagen: 'assets/productos/refri-mabe-8p-5599.jpeg',
      badge: '🎁 Día del Padre'
    },
    {
      nombre: 'Lavadora Mabe 22kg',
      modelo: 'Mod: LMDX2224HABO | Doble tina',
      precio: '$6,999.00',
      imagen: 'assets/productos/lavadora-mabe-6999.jpeg',
      badge: '🎁 Día del Padre'
    },
    {
      nombre: 'Refrigerador Mabe 9 Pies',
      modelo: 'Capacidad: 251 Litros',
      precio: '$7,899.00',
      imagen: 'assets/productos/refri-mabe-9p-7899.jpeg',
      badge: '🎁 Día del Padre'
    },
    {
      nombre: 'Lavadora Hisense 18kg',
      modelo: 'Mod: WSA1803P | Área centrifugado 7.5kg',
      precio: '$5,299.00',
      imagen: 'assets/productos/lavadora-hisense-5299.jpeg',
      badge: '🎁 Día del Padre'
    },
    {
      nombre: 'Juego de Mesa con Sillas',
      modelo: 'Ideal para hogar o negocio',
      precio: '$1,291.00',
      imagen: 'assets/productos/mesa-sillas-1291.jpeg',
      badge: '🎁 Día del Padre'
    },
    {
      nombre: 'Lavadora Winia 18kg',
      modelo: 'Mod: DWM-K363PW | Doble tina',
      precio: '$4,799.00',
      imagen: 'assets/productos/lavadora-winia-4799.jpeg',
      badge: '🎁 Día del Padre'
    },
    {
      nombre: 'Refrigerador Mabe 14 Pies',
      modelo: '363 Litros | Dispensador de agua',
      precio: '$11,899.00',
      imagen: 'assets/productos/refri-mabe-14p-11899.jpeg',
      badge: '🎁 Día del Padre'
    },
    {
      nombre: 'Refrigerador Mabe 11 Pies',
      modelo: 'Capacidad: 302 Litros',
      precio: '$9,299.00',
      imagen: 'assets/productos/refri-mabe-11p-9299.jpeg',
      badge: '🎁 Día del Padre'
    },
    {
      nombre: 'Refrigerador Mabe 14 Pies',
      modelo: '363 Litros | Dispensador de agua',
      precio: '$11,899.00',
      imagen: 'assets/productos/refri-mabe-14p-v2-11899.jpeg',
      badge: '🎁 Día del Padre'
    },
    {
      nombre: 'Pantalla Hyundai 65" Roku TV',
      modelo: 'Mod: Hyled6516qr | Smart TV',
      precio: '$8,999.00',
      imagen: 'assets/productos/hyundai-mundial-8999.jpeg',
      badge: '⚽ Oferta Mundialista'
    },
    {
      nombre: 'Pantalla Hisense 65" 4K',
      modelo: 'Mod: 65A65NV | Dolby Vision | AI Smooth',
      precio: '$9,999.00',
      imagen: 'assets/productos/hisense-mundial-v2-9999.jpeg',
      badge: '⚽ Oferta Mundialista'
    },
    {
      nombre: 'Silla Milan Puebla',
      modelo: 'Colores: Rojo | Verde | Amarillo',
      precio: '$198.00 / pieza',
      imagen: 'assets/productos/silla-milan-198.jpeg',
      badge: '🎁 Día del Padre'
    }
  ];

  abrirModal(index: number): void {
    this.productoSeleccionado = this.productos[index];
    this.modalAbierto = true;
    document.body.style.overflow = 'hidden';
  }

  cerrarModal(): void {
    this.modalAbierto = false;
    this.productoSeleccionado = null;
    document.body.style.overflow = 'auto';
  }
}
