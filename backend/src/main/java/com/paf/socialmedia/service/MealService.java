package com.paf.socialmedia.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import com.paf.socialmedia.entity.Meal;
import com.paf.socialmedia.repository.MealRepository;
import java.io.IOException;
import java.util.List;

@Service
public class MealService {

    @Autowired
    private MealRepository mealRepository;

    public List<Meal> getAllMeals() {
        return mealRepository.findAll();
    }

    public Meal getMealById(String id) {
        return mealRepository.findById(id).orElse(null);
    }

    public Meal createMeal(Meal meal, MultipartFile imageFile) throws IOException {
        meal.setImage(imageFile.getBytes());
        meal.setImageName(imageFile.getOriginalFilename());
        return mealRepository.save(meal);
    }

    public Meal updateMeal(String id, Meal meal, MultipartFile imageFile) throws IOException {
        meal.setId(id);
        meal.setImage(imageFile.getBytes());
        meal.setImageName(imageFile.getOriginalFilename());
        return mealRepository.save(meal);
    }

    public void deleteMeal(String id) {
        mealRepository.deleteById(id);
    }
}
