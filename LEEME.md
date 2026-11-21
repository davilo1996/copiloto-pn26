# Copiloto PN26 — webapp de regularidad

App para el iPad del copiloto en el **XXV Rallye Histórico Primeras Nieves de Sierra Nevada 2026**.
Lleva dentro las medias de los 16 TC (seco y lluvia), sacadas del *Cuadro de cambios de medias*
y comprobadas contra las *Tablas comunes* oficiales (1.650 filas, diferencia máxima 0,005 s, que es el redondeo al centésimo).

## Archivos
- `index.html` — la app completa (datos incluidos, sin dependencias externas)
- `sw.js`, `manifest.webmanifest`, `icon-*.png` — para instalarla en el iPad y usarla sin conexión
- `Tablas-PN26.numbers` / `Tablas-PN26.xlsx` — todas las tablas de respaldo en papel/Numbers (también se descargan desde *Ajustes*)
- `Ruta-PN26-Etapa2.gpx` / `.kml` — ruta de la etapa 2 sacada del roadbook (también se descargan desde *Ruta*)

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

## Tabla por viñetas del roadbook (TC7–TC16)
En **Tablas → Viñetas** cada TC sale con las viñetas del roadbook y los cambios de media: km, nº de viñeta, indicación,
**tiempo ideal acumulado**, hora (si hay hora de salida) y media en vigor.
- Con **SECO** activado los tiempos coinciden con las *Tablas comunes en seco* (diferencia máxima 0,005 s).
- **TC11**: los hitos km 4 y km 5 van con km estimado (≈4,04 y ≈5,05, escalando el hito 0 → hito 13 del roadbook).
  Al pulsar «Paso por…» en carrera, la tabla usa tu marca. La señal 40 no tiene km: lo que hay detrás va en gris (*).
- **TC12**: hasta 11,0XX (STOP en la GR-5204 incluido) hay tiempos; después, «—» (medias por HITOS).
- **TC13**: medias por TABLAS. Cuando las metas en *Tramos → Editar*, salen los tiempos.
- Copia de respaldo en `../Tiempos-por-viñeta-SECO.csv`.

## Ruta (navegación)
La pestaña **Ruta** tiene los 12 sectores (Parque Cerrado → TC7 … TC16 → Llegada) con botones para **Google Maps**
(sector completo con puntos de paso), **Apple Maps** y **Waze** (estos dos solo con el destino).
También se descargan `Ruta-PN26-Etapa2.gpx` (para OsmAnd, Guru Maps o Gaia GPS, que siguen la traza exacta) y `.kml` (para Google My Maps).
- **Ojo, TC11**: la portada del roadbook da como salida el cruce con la A-345, que es el **final** del tramo.
  La salida real es el hito 0 de la GR-5204, junto a la A-4131, y así va en la ruta.
- En los sectores de Cádiar (TC11 → reagrupamiento y reagrupamiento → TC12) Google y OpenStreetMap dan unos 3 km menos que el roadbook,
  por las mismas carreteras. Manda el roadbook.

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

## Con el iPad bloqueado
- Al **ARMAR** o dar **SALIDA**, la app pone un audio de fondo inaudible para que iOS no la congele: los pitidos siguen sonando
  y la **pantalla de bloqueo muestra la media actual y el próximo cambio** (como si fuera música).
- Se puede desactivar en *Ajustes → Avisos → Seguir avisando con el iPad bloqueado*.
- Lo más seguro es no bloquear: *Ajustes del iPad → Pantalla y brillo → Bloqueo automático → Nunca*.
- Aunque iOS la congele, el crono va por la hora: al volver está bien, no suelta pitidos atrasados y dice la media actual.

Todo se guarda en el propio iPad. Si recargas la página en mitad de un tramo, el crono sigue donde estaba.
