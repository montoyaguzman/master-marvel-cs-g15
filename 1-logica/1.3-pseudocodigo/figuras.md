**Problema**

Quiero una calculadora de áreas y perímetros para figuras. La calculadora
solicitara al usuario el nombre de la figura, magnitud a calcular y medidas.
Entonces calcula y devolvera un resultado. Una vez terminado un flujo, se puede
calcular los datos de otra figura si se vuelve a ingresar las entradas.
NOTA 1: Todo en centimetros.
NOTA 2: En triangulo solo considerar el isoceles.
NOTA 3: Considerar que quiza despues haya mas figuras.

**Solución**

INICIO
    Solicita Tipo Figura
    Guarda tipo en var1
    Solicita Magnitud a calcular
    Guarda magnitud en var2
    Solicita dimensiones (L, l, a, b… etc…)
    SI Área y Cuadrado  ENTONCES formula = L * L
    SI Perimetro y Cuadrado ENTONCES formula = 4 * L
    SI Área y Rectangulo ENTONCES formula = b * a
    SI Perimetro y Rectangulo ENTONCES formula = 2(B) + 2(b)
    SI Área y Triangulo Isoceles ENTONCES formula = (b * a)/2
    SI Perimetro y Triangulo Isoceles ENTONCES formula = 2(L) + b
    Guardar resultado de la formula
    Imprime resultado
FIN
