database = [
  {"Doença":"Gripe", "Febre": True, "Coriza": True, "Cefaleia": True, "Dor no corpo": True, "Falta de apetite": True, "Tosse seca": True,"Tosse produtiva": True,"Falta de ar": True,"Náuseas": False,"Diarreia": False}
  {"Doença":"Virose","Febre": True, "Coriza": False, "Cefaleia": True, "Dor no corpo": True, "Falta de apetite": True, "Tosse seca": True,"Tosse produtiva": False,"Falta de ar": False,"Náuseas": False, "Diarreia": True}
  {"Doença":"Dengue","Febre": True, "Coriza": False, "Cefaleia": True, "Dor no corpo": True, "Falta de apetite": True, "Tosse seca": False,"Tosse produtiva": False,"Falta de ar": False,"Náuseas": True, "Diarreia": False}
  {"Doença":"Cólera","Febre": True, "Coriza": False, "Cefaleia": False, "Dor no corpo": True, "Falta de apetite": False, "Tosse seca": False,"Tosse produtiva": False,"Falta de ar": False,"Náuseas": False, "Diarreia":True}
]

def take_chance(answer,property):
    if answer == "y":
      ans = True
    else:
      ans = False

to_remove=[]
 for d in database:
   if d [property] != ans:
     to_remove.append(d)

  for i in to_remove:
    database.remove(i)

  if len(database) == 1:
    print("O diagnóstico mais próximo é: "+database[0]["Doença"])
    quit()   





ans = input("Está com febre(y,n)")
 take_chance(ans, "Febre")

ans = input("Está com coriza(y,n)")
 take_chance(ans, "Coriza")

ans = input("Está com cefaleia(y,n)")
 take_chance(ans, "Cefaleia")

ans = input("Está com dor no corpo(y,n)")
 take_chance(ans, "Dor no corpo")

ans = input("Está com falta de apetite(y,n)")
 take_chance(ans, "Falta de apetite")

ans = input("Está com tosse seca(y,n)")
 take_chance(ans, "Tosse seca")

ans = input("Está com tosse produtiva(y,n)")
 take_chance(ans, "Tosse produtiva")

ans = input("Está com falta de ar(y,n)")
 take_chance(ans, "Falta de ar")

ans = input("Está com náuseas(y,n)")
 take_chance(ans, "Náuseas")

ans = input("Está com diarreia(y,n)")
 take_chance(ans, "Diarreia")