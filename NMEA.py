
from typing import List
import csv
import time

RUN = True
LONGD = 12
ALERT = []
RMCT = "True"
RMCV = "A"
ESTATUSF = []

while RUN == True:

    config = open('config.txt', 'r')

    LMAC = config.readline()
    RMCE = config.readline()
    IACT = int(config.readline())
    config.close()

    time.sleep(IACT)

    LOMAC = list(LMAC.split(','))


    DISP = False
    NDISPBL = ""
    DDISPBL = ""




    print("ESTADO CERO")

    while DISP == False:

        NDISPBL = str(input("Nombre del dispositivo"))
        DDISPBL = str(input("Direccion MAC"))

        if len(DDISPBL) == LONGD:

            if DDISPBL in LOMAC:
                DISP = True
                print("El dispositivo existe en la configuracion")
                ESTATUSF.append(NDISPBL)
                ESTATUSF.append(IACT)
            else:
                ALERT.append("E 0 ACCESO DENEGADO")
                print("El dispositivo no existe en la configuracion")
        else:
            ALERT.append("E 0 ERROR EN LA MAC")
            print("Error en la MAC")




        ESTATGGA = False
        LGGA = []
        IDGGA = ""
        UTC = ""
        LAT = ""
        DIRLAT = ""
        LONGI = ""
        DIRLONGI = ""
        FIX = 0
        SAT = 0
        HDOP = ""
        ALT = 0
        ALTORT = 0
        ALTUM = 0
        SEPGEO = ""
        SEPGEOM = ""
        ANTREGD = ""
        REFESTID = ""




    print("ESTADO 100")

    if DISP == True:

        while ESTATGGA == False:

            gga = open('GGA.txt', 'r')

            LGGA = list(gga.read().split(','))

            FIX = int(LGGA[6])
            SAT = int(LGGA[7])
            time.sleep(0.5)
            gga.close()

            if FIX > 0:

                gga = open('GGA.txt', 'r')

                LGGA = list(gga.read().split(','))

                IDGGA = LGGA[0]
                UTC = LGGA[1]
                LAT = LGGA[2]
                DIRLAT = LGGA[3]
                LONGI = LGGA[4]
                DIRLONGI = LGGA[5]
                HDOP = LGGA[8]
                ALT = LGGA[9]
                ALTORT = LGGA[10]
                SEPGEO = LGGA[11]
                SEPGEOM = LGGA[12]
                ANTREGD = LGGA[13]
                REFESTID = LGGA[14]

                gga.close()

                if SAT > 3:

                    ESTATGGA = True
                    print("SATELITES MAYORES A :", SAT,
                        "CON UNA SENAL FIX DE:", FIX)
                else:
                    ESTATGGA = True
                    ALERT.append("E 100 POCOS SATELITES")
                    print("señal debil de :", SAT)
                    print("VALOR DE FIX", FIX)
            else:

                ALERT.append("E 100 FIX NO VALIDO")
                print("FIX NO VALIDO")
        else:

            print("ELEMENTOS GUARDADOS DE GGA", LGGA)
    else:

        print("TU QUE HACES AQUI?")

#ESTADO 110


        LRMC = []
        LEER = ""
        VELOCIDAD = 0
        RUMBO = ""
        DESVMAG = ""




    if RMCT in RMCE:

        ESTATUSF.append(RMCE)
        print("ENTRANDO A RMC")

        rmc = open('RMC.txt', 'r')
        LRMC = list(rmc.read().split(','))

        rmc.close()

        LEER = LRMC[2]

        if LEER in RMCV:
            rmc = open('RMC.txt', 'r')

            VELOCIDAD = LRMC[7]
            RUMBO = LRMC[8]
            DESVMAG = LRMC[10:11]
            rmc.close()
            print("ELEMENTO GUARDADOS DE RMC", LRMC)

        else:
            ALERT.append(" E 110 RMC NO DETECTECTADO")


    else:
        print("RMC DESACTIVADO DESDE CONFIGURACION")

    print(ALERT)




    LPAM = []




    print("ALAMRAS DETECTADAS :", ALERT)

    print("ESTATUS :", ESTATUSF)

    LPAM = LGGA + LRMC


    print("PAM ", LPAM)




    CODOFF = ""




    CODOFF = input("APAGAR SI / NO")

    if CODOFF == "SI":

        RUN = False

    if CODOFF == "NO":

        RUN = True


else:
    print("DISPOSITIVO APAGADO")
