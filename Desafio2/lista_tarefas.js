
function nova_tarefa(nome = "indefinido", status = "nao_iniciado") {
    this.nome = nome
    this.status = status
}
tarefa1 = new nova_tarefa("Responder bea no discord", "Não concluída"),
tarefa2 = new nova_tarefa("Sofrer pelo Santa Cruz", "Concluída"),
tarefa3 = new nova_tarefa("Mudar algo no boilerplate", "Não concluída")

let lista_tarefas = [tarefa1, tarefa2, tarefa3]
lista_tarefas.push(tarefa4 = new nova_tarefa("Colocar o vídeo certo no treinamento de JS kkkkk <3", "Concluída")) // Apenas uma descontração kkk

for(let i = 0; i < lista_tarefas.length; i = i + 1){
    console.log(`Tarefa ${i + 1}:
        Nome: ${lista_tarefas[i].nome}
        Status: ${lista_tarefas[i].status}`)
}