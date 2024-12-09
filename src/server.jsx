import { createServer, Model } from "miragejs";
import templates from './fixtures/templates';

export function makeServer({environment = 'development'} = {}){
    let server = createServer({
        environment,
        models:{
            template:Model
        },

        fixtures:{
            templates,
        },
        routes(){
            this.namespace = 'api',

            this.get('/templates' , (schema) =>{
                return schema.templates.all();
            })
        }
    })

    return server;
}