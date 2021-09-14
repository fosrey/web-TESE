
# VARIABLES
# LMAC = LISTA DE DISPOSITIVOS,  RMC = VARIABLE ESTADO ON OFF, PACT = PERIODO DE ACTUALIZACION, LOMAC ES LISTA DE DISPOSITIVOS

##
from typing import List


ALERT = []

###----------ESTADO 0-----------
disp = str(input("NOMBRE DE DISPOSITIVO \n"))

LMAC = ""
RMC =False
PACT = 0
TF = 12



config = open('config.txt','r')

LMAC = config.readline()
RMC = config.readline()
PACT = config.readline()

config.close()
LOMAC = list(LMAC.split(','))

if len(disp) == TF:

    if disp in LOMAC:

        print("EL DISPOSITIVO", disp, "EXISTE EN LA CONFIGURACION")
    else:
        ALERT.append(" E 0 DN ")
        print("EL DISPOSITIVO", disp, "NO EXISTE EN LA CONFIGURACION")

else:

    print("LA DIRECCION MAC NO VALIDA")

print(ALERT)



##-----------TERMINACION DE ESTADO 0------------

#-----------------ESTADO 100--------------------

