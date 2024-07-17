
export default function Result({inputText, setState, setTextArea}) {

  const handleMore =() => {
    setState(false)
    setTextArea(null);

  }

  const handleEdit = (e) => {
    e.preventDefault()
    setState(false)

  }

  return (
    <>
    <h1>Text Converter</h1>
    <h3>Converted text is:</h3>

    <textarea value={inputText} rows="5" />
    <button onClick={handleEdit}>Edit </button>
    <button onClick={handleMore}>Convert more</button>

    </>

  )

}