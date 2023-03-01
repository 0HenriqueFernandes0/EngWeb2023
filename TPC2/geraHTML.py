import json
import sys

def ordCidade(cidade):
    return cidade['distrito']

f = open("mapa.json",encoding='utf-8')
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

distrito = ""
for c in cidades:
    if c['distrito'] != distrito:
        distrito = c['distrito']
        pagHTML += f"<p><b>Distrito:</b> {distrito} </p>"
    pagHTML += f"<li><a href='/{c['id']}'>{c['nome']}</a></li>"

pagHTML += """
</ol>
                </td>
                <!-- Coluna do conteúdo -->
                <td width="70%">
"""

pagHTML += """
                </td>
            </tr>
        </table>
    </body>
</html>
"""
path = 'E:\github\DSSbackup\web2023\TPC2\cidades\index.html'
sys.stdout = open(path, 'w',encoding="utf-8")
print(pagHTML)

for c in cidades:
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
                    <ol>
"""
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
                existe = 1
                pagHTML += f"""
                    <p><b>Destinos possiveis:</b></p>
            """
            for ci in cidades:
                if ci['id'] == l['destino']:
                    pagHTML += f"""
                    <p> • <a href="/{ci['id']}">{ci['nome']}</a>({l['distância']} Km)</p>
                    """
                    break
    pagHTML += f""" 
                    <address>[<a href="/index">Voltar ao índice</a>]</address>
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
    path = f"E:\github\DSSbackup\web2023\TPC2\cidades\{c['id']}.html"
    sys.stdout = open(path, 'w',encoding="utf-8")
    print(pagHTML)