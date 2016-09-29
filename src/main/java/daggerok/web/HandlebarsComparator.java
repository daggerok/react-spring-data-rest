package daggerok.web;

import com.github.jknack.handlebars.Options;
import lombok.SneakyThrows;
import pl.allegro.tech.boot.autoconfigure.handlebars.HandlebarsHelper;

import static java.lang.String.valueOf;

@HandlebarsHelper
public class HandlebarsComparator {

    static final String SUCCESS = "true";

    @SneakyThrows
    public CharSequence when(final Comparable<Object> left,
                             final String operator,
                             final Comparable<Object> right,
                             final Options options) {

        return truthy(test(left, operator, right))
                ? options.fn(this)
                : options.inverse(this);
    }

    public CharSequence test(Comparable<Object> left, String operator, final Comparable<Object> right) {
        if (areNull(left, right)) {
            return null;
        }

        switch (operator) {
            case "in":
                if (valueOf(right).contains(valueOf(left))) {
                    return SUCCESS;
                }
                break;
            case "contains":
            case "has":
                if (valueOf(left).contains(valueOf(right))) {
                    return SUCCESS;
                }
                break;
            case "==":
            case "is":
            case "equal":
                if (left.compareTo(right) == 0) {
                    return SUCCESS;
                }
                break;
            case "!=":
            case "is not":
            case "not equal":
                if (left.compareTo(right) != 0) {
                    return SUCCESS;
                }
                break;
            case "<":
            case "less than":
                if (left.compareTo(right) < 0) {
                    return SUCCESS;
                }
                break;
            case "<=":
            case "less or equal":
                if (left.compareTo(right) <= 0) {
                    return SUCCESS;
                }
                break;
            case ">":
            case "greater than":
                if (left.compareTo(right) > 0) {
                    return SUCCESS;
                }
                break;
            case ">=":
            case "greater or equal":
                if (left.compareTo(right) >= 0) {
                    return SUCCESS;
                }
                break;
            case "||":
            case "or":
                if (truthy(left) || truthy(right)) {
                    return SUCCESS;
                }
                break;
            case "&&":
            case "and":
                if (truthy(left) && truthy(right)) {
                    return SUCCESS;
                }
            default:
                return null;
        }
        return null;
    }

    private boolean areNull(Comparable<Object> left, Comparable<Object> right) {
        return null == left || null == right;
    }

    private boolean truthy(Object operand) {
        return Boolean.valueOf(valueOf(operand));
    }
}
