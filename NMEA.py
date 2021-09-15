from typing import List
# ------ Menu

#Variable menu principal sirve para elegir una opcion, dos opciones, seguir el proceso o terminarlo, si se introduce cualquier otra cosa diferente dira entrada invalida.






# VARIABLES
# LMAC = LISTA DE DISPOSITIVOS,  RMC = VARIABLE ESTADO ON OFF, PACT = PERIODO DE ACTUALIZACION, LOMAC ES LISTA DE DISPOSITIVOS

##

while 1>0:
    
        print("Iniciando proceso...")
        ALERT = []

###----------ESTADO 0-----------
        disp = str(input("NOMBRE DE DISPOSITIVO \n"))

        LMAC = ""
        RMC =False
        PACT = 0
        TF = 12

        #Variables GGA
        
        
        #--------------

        config = open('config.txt','r')

        LMAC = config.readline()
        RMC = config.readline()
        PACT = config.readline()

        config.close()
        LOMAC = list(LMAC.split(','))



        if len(disp) == TF:

            if disp in LOMAC:

                print("EL DISPOSITIVO", disp, "EXISTE EN LA CONFIGURACION")

                print("... Recibiendo datos (GGA)")


            else:
                ALERT.append(" E 0 DN ")
                print("EL DISPOSITIVO", disp, "NO EXISTE EN LA CONFIGURACION")

               

        else:

            print("LA DIRECCION MAC NO VALIDA")



##-----------TERMINACION DE ESTADO 0------------

#-----------------ESTADO 100--------------------







      




















#Finalizacion de menu, opcion de cerrado y comparacion de opciones
