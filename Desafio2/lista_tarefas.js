function novaTarefa(nome = "indefinido", status = "nao_iniciado") {
    this.nome = nome
    this.status = status
}
tarefa1 = new novaTarefa("Responder bea no discord", "Não concluída"),
tarefa2 = new novaTarefa("Sofrer pelo Santa Cruz", "Concluída"),
tarefa3 = new novaTarefa("Mudar algo no boilerplate", "Não concluída")

let listaTarefas = [tarefa1, tarefa2, tarefa3]
listaTarefas.push(tarefa4 = new novaTarefa("Colocar o vídeo certo no treinamento de JS kkkkk <3", "Concluída")) // Apenas uma descontração kkk

for(let i = 0; i < listaTarefas.length; i = i + 1){
    console.log(`Tarefa ${i + 1}:
        Nome: ${listaTarefas[i].nome}
        Status: ${listaTarefas[i].status}`)
}