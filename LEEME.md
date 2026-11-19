# Copiloto PN26 — webapp de regularidad

App para el iPad del copiloto en el **XXV Rallye Histórico Primeras Nieves de Sierra Nevada 2026**.
Lleva dentro las medias de los 16 TC (seco y lluvia), sacadas del *Cuadro de cambios de medias*
y comprobadas contra las *Tablas comunes* oficiales (1.650 filas, diferencia máxima 0,005 s, que es el redondeo al centésimo).

## Archivos
- `index.html` — la app completa (datos incluidos, sin dependencias externas)
- `sw.js`, `manifest.webmanifest`, `icon-*.png` — para instalarla en el iPad y usarla sin conexión

## Instalar en el iPad (sin conexión)
Safari solo guarda una web para usarla sin conexión si se sirve por **https**. Lo más fácil:
1. Súbela a un hosting estático gratuito con https: **GitHub Pages** o **Netlify Drop**
   (arrastra la carpeta `webapp` a https://app.netlify.com/drop).
2. En el iPad, abre la dirección en **Safari** con internet.
3. **Compartir → Añadir a pantalla de inicio**.
4. Ábrela una vez desde el icono con internet. A partir de ahí funciona en **modo avión**.
5. Pruébala en modo avión antes de la carrera.

> Si cambias algo en los archivos, abre la app dos veces con internet para que se actualice.

## Cómo se usa en carrera
1. Elige **SECO / LLUVIA** (arriba a la derecha) según lo que diga la organización.
2. Elige el tramo (TC1…TC16).
3. Pon la **hora de salida** y pulsa **ARMAR**: cuenta atrás con pitidos y el crono arranca solo a la hora exacta.
   O pulsa **SALIDA YA** en el momento de salir.
4. En pantalla: **media actual** en grande, **próximo cambio** (km y cuenta atrás), km ideal, crono y lo que falta.
   Aviso con pitido y voz unos segundos antes de cada cambio de media.
5. **Comprobación**: toca el botón naranja **«Toca al pasar por X,XXX»** cuando el tripmaster marque esa distancia,
   o pulsa **MARCA** y teclea la lectura. Verás el **adelanto o retraso** en segundos y a qué velocidad ir para corregirlo en 500 m.
6. **Pantalla piloto**: solo la media y el próximo cambio, en grande.
7. **TERMINAR** guarda el tramo en el **Registro** (se puede exportar en CSV).

## Tramos especiales
- **TC5 y TC13: «TABLAS»**: la organización entregará las medias aparte. Mételas en *Tramos → Editar*.
- **TC11**: los cambios son en HITO 4, HITO 5 y SEÑAL 40 (sin km). Si sabes los km, ponlos en *Editar*;
  si no, en carrera sale un botón **«PASO POR HITO 4»** que se pulsa al pasar (y luego se puede corregir con la lectura del tripmaster).
- **TC12**: el cambio en «11,0XX» funciona igual y después vienen medias por **HITOS** (según el libro de ruta).
- **TC10 y TC14**: salida lanzada.

## Ajustes útiles
- **Hora oficial**: pulsa *Sincronizar* justo cuando el reloj oficial marque el segundo :00 de un minuto.
- **Calibración del tripmaster**: distancia oficial frente a la lectura del tripmaster, para sacar el factor de corrección.
- **GPS** (solo en iPad con datos móviles): adelanto o retraso en directo y velocidad real. Es solo una ayuda.
- Pantalla siempre encendida, modo claro y oscuro (botón ☀/☾ en la cabecera) y modo rojo nocturno, pitidos y voz, calculadora distancia-media-tiempo,
  copia de seguridad (exportar e importar).

Todo se guarda en el propio iPad. Si recargas la página en mitad de un tramo, el crono sigue donde estaba.
