import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

type MyModalProps = {
  show: boolean;
  onHide: () => void;
  handleColorChange: (color: string) => void;
}

const ModalColorPick = ({ show, onHide, handleColorChange }: MyModalProps) => {

  const [selectedColor, setSelectedColor] = useState("#FFF");
  const handleColorPickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  }

  const handleAcceptClick = () => {
    handleColorChange(selectedColor);
    onHide();
  }
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title> Cambiar color </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Color Picker */}
        <Form.Label htmlFor="exampleColorInput">
          Elije un color
        </Form.Label>
        <Form.Control
          type='color'
          id='exampleColorInput'
          defaultValue="#FFF"
          title="Elige tu color"
          onChange={handleColorPickerChange}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}> Cancelar </Button>
        <Button variant="primary" onClick={handleAcceptClick}> Aceptar </Button>
      </Modal.Footer>

    </Modal>
  )
}

export default ModalColorPick
