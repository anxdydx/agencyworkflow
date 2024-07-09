import React from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from '@nextui-org/react'
import {inter, lexendDeca, poppins} from './fonts'

export default function OnLoadModal(props: any) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()
  const loadTheBanner = () => {
    setTimeout(() => {
      onOpen()
    }, 3000)
  }
  React.useEffect(() => {
    loadTheBanner()
  }, [])
  return (
    <>
      <Modal isOpen={isOpen} backdrop="blur" onOpenChange={onOpenChange} onClose={props.closeOn}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className={`${inter.className} font-bold`}>Important</ModalHeader>
              <ModalBody className={`${inter.className}`}>
                <p className="text-sm font-normal  ">
                  This project is not completely finished by the designers and the developers but it
                  is deployed by vercel from github for the public and private members reviews for
                  the comments on the design of the project.
                </p>

                <p className="text-sm">
                  So we were requesting you to add your personal recommendations for the improvement
                  in design if you are interested in?. And if the suggestion is accepted, your name
                  will be added into the top recommendators.
                </p>

                <div className="inputs">
                  <Input className="bg-none" radius="sm" />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="text-black dark:text-white" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  className="rounded-none bg-black text-white dark:bg-white dark:text-black"
                  size="sm"
                >
                  Submit &rarr;
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
