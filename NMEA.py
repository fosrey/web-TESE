


from typing import List
import csv

RUN = False
LONGD = 12
ALERT = []

RUN = input("ENCEDER O APAGAR ON / OFF")

config = open('config.txt','r')

LMAC = config.readline()
RMCE = config.readline()
IACT = config.readline()

config.close()

LOMAC = list(LMAC.split(','))

print(LOMAC)


##while RUN in "ON":
    
    
class Estat0:
        
    DISP = False
             
    NDISPBL = ""
    DDISPBL = ""
            
BLUET = Estat0()

print("ESTADO CERO")

while BLUET.DISP == False:
        
    BLUET.NDISPBL = str(input("Nombre del dispositivo"))
    BLUET.DDISPBL = str(input("Direccion MAC"))
        
    if len(BLUET.DDISPBL) == LONGD:
        
        if BLUET.DDISPBL in LOMAC:
            BLUET.DISP = True
            print("El dispositivo existe en la configuracion")
        else:
            ALERT.append("E 0 DN")
            print("El dispositivo no existe en la configuracion")
    else:
        ALERT.append("E 0 DM")
        print("Error en la MAC")
   
print(ALERT)   



class Estat100:
    
    
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

GGA = Estat100()

print("ESTADO 100")

if BLUET.DISP == True:
    
    while GGA.ESTATGGA == False :
        
        gga = open('GGA.txt','r')

        GGA.LGGA = list(gga.read().split(','))
        
        GGA.IDGGA = GGA.LGGA[0]
        GGA.UTC = GGA.LGGA[1]
        GGA.LAT = GGA.LGGA[2]
        GGA.DIRLAT = GGA.LGGA[3]
        GGA.LONGI = GGA.LGGA[4]
        GGA.DIRLONGI = GGA.LGGA[5]
        GGA.FIX = int(GGA.LGGA[6])
        GGA.SAT = int(GGA.LGGA[7])
        GGA.HDOP = GGA.LGGA[8]
        GGA.ALT = GGA.LGGA[9]
        GGA.ALTORT = GGA.LGGA[10]
        GGA.SEPGEO = GGA.LGGA[11]
        GGA.SEPGEOM = GGA.LGGA[12]
        GGA.ANTREGD = GGA.LGGA[13]
        GGA.REFESTID = GGA.LGGA[14]
        gga.close()
        
        if GGA.FIX > 0 :
            
            if GGA.SAT > 3:
                
                GGA.ESTATGGA = True
                print("SATELITES MAYORES A 3","CON UNA SENAL FIX DE:",GGA.FIX)
            else:
                GGA.ESTATGGA = True
                ALERT.append("E 100 SAT")
                print("sin señal")
        else:
               
            print("FIX NO VALIDO")
    else:
        
        print("ELEMENTOS GUARDADOS",GGA.LGGA)
else:
    
    print("TU QUE HACES AQUI?")        
    
class Estat110:
    
    
    
    
##else:
   ## print("DISPOSITIVO APAGADO")


