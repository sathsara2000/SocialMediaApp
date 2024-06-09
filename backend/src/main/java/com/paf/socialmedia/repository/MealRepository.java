package com.paf.socialmedia.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.paf.socialmedia.entity.Meal;

public interface MealRepository extends MongoRepository<Meal, String> {
}
