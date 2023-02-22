import json

def ordCidade(cidade):
    return cidade['nome']

f = open("mapa.json", encoding="utf8")
mapa = json.load(f)
cidades = mapa['cidades']
cidades.sort(key=ordCidade)
viagens = mapa['ligações']

pagHTML = """
<!DOCTYPE html>
<html>
    <head>
        <title>Mapa Virtual</title>
        <meta charset="utf-8"/>
    </head>
    <body>
        <h1>Mapa Virtual</h1>
        <table>
            <tr>
                <!-- Coluna do índice -->
                <td width="30%" valign="top">
                    <a name="indice"/>
                    <h3>Índice</h3>
                    <ol>
"""

for c in cidades:
    pagHTML += f"<li><a href='#{c['id']}'>{c['nome']}</a></li>"

pagHTML += """
</ol>
                </td>
                <!-- Coluna do conteúdo -->
                <td width="70%">
"""

for c in cidades:
    pagHTML += f"""
                    <a name="{c['id']}"/>
                    <h3>{c['nome']}</h3>
                    <p><b>Distrito:</b> {c['distrito']}</p>
                    <p><b>População:</b> {c['população']}</p>
                    <p><b>Descrição:</b> {c['descrição']}</p>
    """
    existe = 0
    for l in viagens:
        if c['id']==l['origem']:
            if existe == 0 :
                pagHTML += f"""
                <p><b>Destinos possiveis:</b></p>
                <p><b>Cidade:</b> {l['destino']}</p>
                <p><b>Distancia:</b> {l['distância']}</p>
            """

            pagHTML += f"""

            """
    pagHTML += f""" 
                    <adress>[<a href="#indice">Voltar ao índice</a>]</address>
                    <center>
                        <hr width="80%"/>
                    </center>
    """

pagHTML += """
                </td>
            </tr>
        </table>
    </body>
</html>
"""

print(pagHTML)