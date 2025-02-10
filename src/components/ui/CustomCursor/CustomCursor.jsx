import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const CustomCursor = () => {
  return (
    <>
    <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="230, 230, 230"
        outerAlpha={0.2}
        innerScale={0.8}
        outerScale={3}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
    </>
  )
}

export default CustomCursor