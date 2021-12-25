import { useEffect } from 'react';

export default function ApiDoc({schema}) {
  useEffect(() => import("@asyncapi/web-component/lib/asyncapi-web-component"), []);

  return <asyncapi-component schema={schema} cssImportPath="./asyncapi.css" />
}

export async function getStaticProps(context) {
  const fs = require('fs');
  const path = require('path');
  const data = fs.readFileSync(path.resolve(process.cwd(), 'public', 'asyncapi.yml'), 'utf-8');

  return {
    props: {
      schema: data
    }
  }
}