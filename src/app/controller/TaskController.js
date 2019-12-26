import Tasks from "../models/Task";

class TaskController {
  async index() {
    try {
      const response = await Tasks.findAll();
      return response;
    } catch (error) {
      console.log("error-index", error);
      return { error: "não foi possivel selecionar as Task" };
    }
  }

  async store(req) {
    try {
      const response = await Tasks.create(req);
      return response;
    } catch (error) {
      console.log("error-store", error);
      return { error: "Algo inesperado aconteceu" };
    }
  }

  async update(req) {
    try {
      const existTodo = await Tasks.findOne({ where: { title: req.title } });
      if (existTodo) {
        existTodo.status = req.status;
        return existTodo;
      }
      return "Não existe essa Task";
    } catch (error) {
      return { message: "Entraremos em contato em breve" };
    }
  }

  async delete(req) {
    try {
      const existTodo = await Tasks.findOne({ where: { title: req.title } });
      if (existTodo) {
        console.log("aqui", existTodo);
        await existTodo.destroy();
        const response = `Task ${existTodo.title}, foi removida com sucesso`;
        return response;
      }
      return "Não existe essa Task";
    } catch (error) {
      console.log(error);
      return { message: "Entraremos em contato em breve" };
    }
  }
}

export default new TaskController();
