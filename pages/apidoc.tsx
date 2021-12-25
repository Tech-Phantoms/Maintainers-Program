import '@asyncapi/react-component/lib/styles/fiori.css';

import AsyncApiComponent from '@asyncapi/react-component';

export default function ApiDocs() {
    return <AsyncApiComponent schema={
        `
        
        asyncapi: '2.1.0'
info:
  title: TechPhantoms Maintainer's Program
  version: '0.0.1'
channels:
  /projects:
    subscribe:
      payload:
        type: object:
        properties:
          id: string
          name: string
          project_link: string
          maintainer:
            type: object
            properties:
              name: string
              socials:
                type: object
                properties:
                  email: string
                  github: string
              profile_pic: string


        `
    } />
}