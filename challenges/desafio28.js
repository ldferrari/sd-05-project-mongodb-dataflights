db.resumoVoos.insertOne({"empresa": "LATAM AIRLINES BRASIL", "totalVoosDomesticos": db.voos.count({ $and: [{"empresa.nome": "LATAM AIRLINES BRASIL"}, {"natureza": "Doméstica"}] }) });

db.resumoVoos.find({"empresa": "LATAM AIRLINES BRASIL"}, {"_id":0, "empresa": 1, "totalVoosDomesticos": 1}).pretty();
