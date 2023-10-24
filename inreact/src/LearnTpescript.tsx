/**
 *  Say you have props coming in, and you know the data types comming in
 * Can give the props a Type, comming from an object interface as props do come in in an objecy {} 
 */

export interface LearnTypescriptProps{
    title:string 
    color?:string

}

const LearnTpescript = (props:LearnTypescriptProps) => {
  return (
    <div style={{color: props.color ? props.color : 'blue'}}>{props.title}</div>
  )
}

export default LearnTpescript