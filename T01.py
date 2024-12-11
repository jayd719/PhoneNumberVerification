import cv2 as cv
import os
def process_image(filepath):
    img = cv.imread(filepath)
    img = ~img
    cv.imwrite(filepath,img)