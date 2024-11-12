import pygame

pygame.init() #initialize pygame
screen = pygame.display.set_mode((800,400)) #initialize screen and set width and height
pygame.display.set_caption("Runner") #editing the games title
clock = pygame.time.Clock() # Creating a clock to perform 60fps

test_surface = pygame.image.load("Pygame_files/graphics/Sky.png")

while True: # creating a infinite loop so that the game loops forever
  for event in pygame.event.get(): # Creating the function to quit the game
    if event.type == pygame.QUIT:  #
      pygame.quit()  #
      quit() #
  screen.blit(test_surface,(0,0))

  pygame.display.update() 
  clock.tick(60) 