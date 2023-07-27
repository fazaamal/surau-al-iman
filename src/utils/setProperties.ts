const setProperties = (properties: Record<string, string>, document: Document) => {
  Object.entries(properties).forEach(([key, value]) => {
    console.log(key, value);
    
    document.documentElement.style.setProperty('--'+key, value);
  });
}

export default setProperties;