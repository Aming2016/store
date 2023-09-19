// src/store/index.ts

const files:any = import.meta.globEager('./module/*.ts');
// export interface IAppStore {
//     counter: ReturnType<typeof counter>;
// }

const appStore :any= {};

/**
 * 注册app状态库
 */
export const registerStore = () =>{
    Object.keys(files).forEach((key:string) => {
        const filename = key.replace(/(\.\/module\/|\.(js|ts))/g, "");
        const defaule = files[key].default || files[key]
        appStore[filename] = defaule()
      })
      return {
        appStore
      }
}
export default appStore;