from matplotlib import pyplot as plt
import matplotlib.patches as patches

def draw_dispenser_schematic():
    fig, ax = plt.subplots(figsize=(8, 10))

    # Draw storage compartment (cylinder representation)
    storage = patches.Rectangle((3, 6), 4, 4, linewidth=2, edgecolor='black', facecolor='lightgrey')
    ax.add_patch(storage)
    ax.text(5, 10, "Storage Compartment", fontsize=12, ha='center')

    # Draw balls in storage
    for i in range(5):
        ball = patches.Circle((5, 9 - i), 0.4, linewidth=1, edgecolor='black', facecolor='orange')
        ax.add_patch(ball)

    # Draw dispensing mechanism (rotary disk)
    rotary_disk = patches.Circle((5, 4.5), 1.5, linewidth=2, edgecolor='black', facecolor='lightblue')
    ax.add_patch(rotary_disk)
    ax.text(5, 4.5, "Rotary Disk", fontsize=12, ha='center')

    # Draw output chute
    chute = patches.Rectangle((4.5, 1), 1, 3.5, linewidth=2, edgecolor='black', facecolor='lightgrey')
    ax.add_patch(chute)
    ax.text(5, 0.5, "Output Chute", fontsize=12, ha='center')

    # Draw ball in output chute
    dispensed_ball = patches.Circle((5, 2), 0.4, linewidth=1, edgecolor='black', facecolor='orange')
    ax.add_patch(dispensed_ball)

    # Add labels
    ax.text(5, 8, "Balls", fontsize=10, ha='center', color='black')

    # Draw arrows to show ball flow
    ax.annotate("", xy=(5, 6), xytext=(5, 8.5), arrowprops=dict(arrowstyle='->', lw=1.5))
    ax.annotate("", xy=(5, 4), xytext=(5, 6), arrowprops=dict(arrowstyle='->', lw=1.5))
    ax.annotate("", xy=(5, 2.5), xytext=(5, 4), arrowprops=dict(arrowstyle='->', lw=1.5))

    # Set plot limits and title
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 12)
    ax.set_aspect('equal', adjustable='box')
    ax.axis('off')
    ax.set_title("Table Tennis Ball Dispenser Schematic", fontsize=14)

    plt.show()

# Call the function to draw the schematic
draw_dispenser_schematic()
