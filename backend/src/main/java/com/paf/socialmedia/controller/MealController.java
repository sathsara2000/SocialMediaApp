package com.paf.socialmedia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.paf.socialmedia.entity.Meal;
import com.paf.socialmedia.service.MealService;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/meals")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MealController {

    @Autowired
    private MealService mealService;

    @GetMapping
    public List<Meal> getAllMeals() {
        return mealService.getAllMeals();
    }

    @GetMapping("/{id}")
    public Meal getMealById(@PathVariable String id) {
        return mealService.getMealById(id);
    }

    @PostMapping
    public Meal createMeal(@RequestParam("name") String name, @RequestParam("description") String description,
            @RequestParam("imageFile") MultipartFile imageFile) throws IOException {

        Meal meal = new Meal();

        meal.setName(name);
        meal.setDescription(description);

        return mealService.createMeal(meal, imageFile);
    }

    @PutMapping("/{id}")
    public Meal updateMeal(@PathVariable String id, @RequestParam("name") String name,
            @RequestParam("description") String description, @RequestParam("imageFile") MultipartFile imageFile)
            throws IOException {

        Meal meal = new Meal();

        meal.setName(name);
        meal.setDescription(description);

        return mealService.updateMeal(id, meal, imageFile);
    }

    @DeleteMapping("/{id}")
    public void deleteMeal(@PathVariable String id) {
        mealService.deleteMeal(id);
    }
}
