
# VARIABLES
# LMAC = LISTA DE DISPOSITIVOS,  RMC = VARIABLE ESTADO ON OFF, PACT = PERIODO DE ACTUALIZACION

##
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

print(LMAC,RMC,PACT)

T = len(disp)

print(T)

if len(disp) == TF:

    if disp in LMAC:

        print("EL DISPOSITIVO", disp, "EXISTE EN LA CONFIGURACION")
    else:
        ALERT.append(" E 0 DN ")
        print("EL DISPOSITIVO", disp, "NO EXISTE EN LA CONFIGURACION")

else:

    print("LA DIRECCION MAC NO VALIDA")

print(ALERT)

##-----------TERMINACION DE ESTADO 0------------

#-----------------ESTADO 100--------------------

