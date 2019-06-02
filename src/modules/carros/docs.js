/**
* @api {get} /api/carros Buscar carros
* @apiName getCarros
* @apiGroup Carros
*
* @apiSuccess {[]} Array Lista de carros.
*/

/**
* @api {post} /api/carros Inserção de carro
* @apiName insertCarro
* @apiGroup Carros
*
* @apiParam {String} modelo Modelo do Carro.
* @apiParam {Number} ano Ano do Carro.
* @apiParam {String} motor Motor do Carro.
* @apiParam {Number} id_marca Marca do Carro.
*/

/**
* @api {put} /api/carros/:id Alteração de carros
* @apiName updateCarro
* @apiGroup Carros
*
* @apiParam {Number} id ID do Carro.
* @apiParam {String} modelo Modelo do Carro.
* @apiParam {Number} ano Ano do Carro.
* @apiParam {String} motor Motor do Carro.
* @apiParam {Number} id_marca Marca do Carro.
*/

/**
* @api {del} /api/carros:id Exclusão de carros
* @apiName deleteCarro
* @apiGroup Carros
*
* @apiParam {Number} id ID do Carro.
*/
